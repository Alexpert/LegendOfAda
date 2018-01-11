
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

CREATE RULE CONNECTION AS ON INSERT
TO CONNECTED DO INSTEAD UPDATE USERS
set timeout = now() + interval '2 hours', token = floor(random()*2147483647)
where username = new.username
and password = new.password
and timeout < now();

CREATE RULE chiefBelong AS ON INSERT
TO GUILDS
DO ALSO INSERT INTO BELONGS VALUES (new.leader, new.name);

-- ACHIEVEMENTS

CREATE FUNCTION debut() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 1) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 1);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tDebut BEFORE INSERT ON USERS
FOR EACH ROW
EXECUTE PROCEDURE debut();


CREATE FUNCTION chiefGuild() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.leader and achievement = 2) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.leader, 2);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tChiefGuild BEFORE INSERT ON GUILDS
FOR EACH ROW
EXECUTE PROCEDURE chiefGuild();

CREATE FUNCTION apprentice() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 3) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 3);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tApprentice BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 7 AND new.value > 0)
EXECUTE PROCEDURE apprentice();    

CREATE FUNCTION baguette() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 4) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 4);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tBaguette BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 13 AND new.value > 0)
EXECUTE PROCEDURE baguette(); 

CREATE FUNCTION zombie() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 5) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 5);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tZombie BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 19 AND new.value > 0)
EXECUTE PROCEDURE zombie(); 

CREATE FUNCTION curry() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 6) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 6);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tCurry BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 25 AND new.value > 0)
EXECUTE PROCEDURE curry(); 

CREATE FUNCTION teaTime() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 7) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 7);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tTeaTime BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 31 AND new.value > 0)
EXECUTE PROCEDURE teaTime(); 

CREATE FUNCTION chtulu() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 8) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 8);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tChtulu BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 36 AND new.value > 0)
EXECUTE PROCEDURE chtulu(); 

CREATE FUNCTION moon() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 9) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 9);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tMoon BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 41 AND new.value > 0)
EXECUTE PROCEDURE moon(); 

CREATE FUNCTION foreverAlone() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 12) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 12);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tForeverAlone BEFORE INSERT ON FRIENDS
FOR EACH ROW WHEN (new.user1 = new.user2)
EXECUTE PROCEDURE foreverAlone();


CREATE FUNCTION mafia() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 13) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 13);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tMafia BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 18 AND new.value > 0)
EXECUTE PROCEDURE mafia(); 

CREATE FUNCTION manifProlo() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 14) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 14);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tManifProlo BEFORE INSERT ON SCORES
FOR EACH ROW WHEN (new.level = 29 AND new.value > 0)
EXECUTE PROCEDURE manifProlo(); 

CREATE FUNCTION loveIsReal() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 16) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 16);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tLoveIsReal BEFORE INSERT ON FAVORITES
FOR EACH ROW
EXECUTE PROCEDURE loveIsReal(); 

CREATE FUNCTION philantrope() RETURNS trigger
AS $$
BEGIN
	IF ((select count(*) from achieved where username = new.username and achievement = 17) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 17);
	END IF;
	RETURN new;
END;$$ language 'plpgsql';
	   
CREATE TRIGGER tPhilantrope BEFORE INSERT ON BELONGS
FOR EACH ROW
EXECUTE PROCEDURE philantrope();

CREATE FUNCTION saveTheWorld() RETURNS trigger
AS $$
BEGIN
	IF (((select count(*) from scores where username = new.username and value > 0 and level in (7, 13, 19, 25, 31, 36, 41)) > 0) AND (select count(*) from achieved where username = new.username and achievement = 10) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 10);
	END IF;
END;$$ language 'plpgsql';

CREATE TRIGGER tSaveTheWorld BEFORE INSERT ON SCORES
FOR EACH ROW
EXECUTE PROCEDURE saveTheWorld();

CREATE FUNCTION apprentiMath() RETURNS trigger
AS $$
BEGIN
	IF (((select count(*) from scores where username = new.username and value > 0) = 0) AND (select count(*) from achieved where username = new.username and achievement = 10) = 0)
	THEN
		INSERT INTO ACHIEVED VALUES (new.username, 11);
	END IF;
	RETURN NEW;
END;$$ language'plpgsql';

CREATE TRIGGER tApprentiMath BEFORE INSERT ON SCORES
FOR EACH ROW
EXECUTE PROCEDURE apprentiMath();


-- Fin ACHIEVEMENTS


CREATE FUNCTION delUser() RETURNS trigger
AS $$ declare username VARCHAR(32) ; 
BEGIN
	SELECT users.username INTO username
     	FROM USERS
    	WHERE token = old.token AND timeout > now();
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
	end if;
END ; $$ language 'plpgsql';

CREATE TRIGGER deleteUser BEFORE DELETE ON USERS 
FOR EACH ROW EXECUTE PROCEDURE delUser();

CREATE FUNCTION delGuild() RETURNS trigger
AS $$
BEGIN
	PERFORM DELETE FROM SCORES WHERE guild = old.name;
	PERFORM DELETE FROM BELONGS WHERE guild = old.name;
	RETURN old;
END; $$ language 'plpgsql';

CREATE TRIGGER deleteGuild BEFORE DELETE ON GUILDS
FOR EACH ROW
EXECUTE PROCEDURE delGuild();

CREATE FUNCTION chiefLeave() RETURNS trigger
AS $$
BEGIN
	IF (old.username = (select leader from guilds where name = old.name)) then
		PERFORM DELETE FROM GUILDS WHERE guild = old.name;
	END IF;
	RETURN old;
END; $$ language 'plpgsql';

CREATE TRIGGER chiefLeave AFTER DELETE ON BELONGS
FOR EACH ROW
EXECUTE PROCEDURE chiefLeave();
