
CREATE TABLE ACHIEVEMENTS
(
	id SERIAL PRIMARY KEY,
	name TEXT UNIQUE NOT NULL,
	description TEXT NOT NULL
);

CREATE TABLE USERS
(
	username VARCHAR(32) PRIMARY KEY,
	password VARCHAR(32) NOT NULL, -- md5 sum always 32 hex chars

	token INTEGER UNIQUE,
	timeout TIMESTAMP NOT NULL DEFAULT now(),
	avatar INTEGER NOT NULL DEFAULT 1,

	FOREIGN KEY(avatar) REFERENCES ACHIEVEMENTS(id)
);

CREATE TABLE GUILDS
(
	name VARCHAR(32) PRIMARY KEY,
	leader VARCHAR(32) NOT NULL,

	FOREIGN KEY(leader) REFERENCES USERS(username)
);

CREATE TABLE THEMES
(
	id SERIAL PRIMARY KEY,
	name TEXT UNIQUE NOT NULL
);

CREATE TABLE LESSONS
(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	theme INTEGER NOT NULL,

	FOREIGN KEY(theme) REFERENCES THEMES(id)
);

CREATE TABLE GAMES
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(32) NOT NULL,
	description TEXT NOT NULL,
	about INTEGER NOT NULL,

	FOREIGN KEY(about) REFERENCES LESSONS(id)
);

CREATE TABLE WORLDS
(
	name VARCHAR(32) PRIMARY KEY
);

CREATE TABLE LEVELS
(
	id SERIAL PRIMARY KEY,
	world VARCHAR(32) NOT NULL,
	game INTEGER NOT NULL,
	x INTEGER NOT NULL,
	y INTEGER NOT NULL,
	previous INTEGER,

	FOREIGN KEY(world) REFERENCES WORLDS(name),
	FOREIGN KEY(game) REFERENCES GAMES(id),
	FOREIGN KEY(previous) REFERENCES LEVELS(id)
);

CREATE TABLE SCORES
(
	username VARCHAR(32) NOT NULL,
	date TIMESTAMP NOT NULL,
	value INTEGER NOT NULL,
	game INTEGER NOT NULL,
	level INTEGER,
	guild VARCHAR(32),

	FOREIGN KEY(username) REFERENCES USERS(username),
	FOREIGN KEY(game) REFERENCES GAMES(id),
	FOREIGN KEY(level) REFERENCES LEVELS(id),
	FOREIGN KEY(guild) REFERENCES GUILDS(name),

	PRIMARY KEY(username, date)
);

-- Ci dessous, tables issues de la tranformation du modele

CREATE TABLE FRIENDS
(
	user1 VARCHAR(32) NOT NULL,
	user2 VARCHAR(32) NOT NULL,
	accepted BOOLEAN DEFAULT FALSE,

	FOREIGN KEY (user1) REFERENCES USERS(username),
	FOREIGN KEY (user2) REFERENCES USERS(username),

	PRIMARY KEY (user1, user2)
);

CREATE TABLE ACHIEVED
(
	username VARCHAR(32) NOT NULL,
	achievement INTEGER NOT NULL,

	FOREIGN KEY (username) REFERENCES USERS(username),
	FOREIGN KEY (achievement) REFERENCES ACHIEVEMENTS(id),

	PRIMARY KEY (username, achievement)
);

CREATE TABLE BELONGS
(
	username VARCHAR(32) NOT NULL,
	guild VARCHAR(32) NOT NULL,

	FOREIGN KEY (username) REFERENCES USERS(username),
	FOREIGN KEY (guild) REFERENCES GUILDS(name),

	PRIMARY KEY (username, guild)
);

CREATE TABLE FAVORITES
(
	username VARCHAR(32) NOT NULL,
	game INTEGER NOT NULL,

	FOREIGN KEY (username) REFERENCES USERS(username),
	FOREIGN KEY (game) REFERENCES GAMES(id),
	
	PRIMARY KEY (username, game)
);

-- Ci dessous, vues, règles et autres

CREATE VIEW CONNECTED AS 
SELECT *
FROM USERS
WHERE timeout >= now();

CREATE RULE CONNECTION as on INSERT
TO CONNECTED DO INSTEAD UPDATE USERS
set timeout = now() + interval '2 hours', token = floor(random()*2147483647)
where username = new.username
and password = new.password
and timeout < now();

CREATE FUNCTION achieves( tok integer, achievement integer)
AS $$ declare username VARCHAR(32) ; 
BEGIN 
      SELECT username INTO username
      FROM USERS
      WHERE token = tok; 
      INSERT INTO ACHIEVED VALUES (username, achievement);
END ; $$ language ’plpgsql’;

CREATE FUNCTION delUser( tok integer) RETURN trigger
AS $$ declare username VARCHAR(32) ; 
BEGIN
	SELECT users.username INTO username
     	FROM USERS
    	WHERE token = tok AND timeout > now();
	if (username is not null) then
		PERFORM DELETE FROM ACHIEVED WHERE achieved.username = username;
		PERFORM DELETE FROM FRIENDS WHERE user1 = username OR user2 = username;
		PERFORM DELETE FROM SCORES WHERE scores.username = username;
		PERFORM DELETE FROM BELONGS WHERE belongs.username = username;
		PERFORM DELETE FROM FAVORITES WHERE favorites.username = username;
		PERFORM DELETE FROM GUILDS WHERE leader = username;
		RETURN old;
	else
		RAISE EXCEPTION 'User invalide pour la suppression';
	endif;
END ; $$ language ’plpgsql’;

CREATE TRIGGER deleteUser BEFORE DELETE ON USERS 
FOR EACH ROW EXECUTE PROCEDURE delUser(old.token);

CREATE FUNCTION delGuild(name varchar(32)) RETURN trigger
AS $$
BEGIN
	PERFORM DELETE FROM SCORES WHERE guild = name;
	PERFORM DELETE FROM BELONGS WHERE guild = name;
	RETURN old;
END; $$ language 'plpgsql';

CREATE TRIGGER deleteGuild BEFORE DELETE ON GUILDS
FOR EACH ROW EXECUTE PROCEDURE delGuild(old.name);
