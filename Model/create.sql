

CREATE TABLE USERS
(
  username varchar(32) PRIMARY KEY,
  password varchar(256)
);

CREATE TABLE GUILD
(
  name varchar(32) PRIMARY KEY,
  username varchar(32),

  FOREIGN KEY(username) REFERENCES USERS(username)
);

CREATE TABLE GAME
(
  id SERIAL PRIMARY KEY,
  name varchar(32)
);

CREATE TABLE WORLD
(
  name varchar(32) PRIMARY KEY
);

CREATE TABLE LEVEL
(
    id SERIAL PRIMARY KEY,
    dialog TEXT,
    worldName varchar(32),
    nextLevel int,
    gameId int,
    x int,
    y int,

    FOREIGN KEY (worldName) REFERENCES WORLD(name),
    FOREIGN KEY (nextLevel) REFERENCES LEVEL(id),
    FOREIGN KEY (gameId) REFERENCES GAME(id)
);

CREATE TABLE THEME
(
  id SERIAL PRIMARY KEY,
  name varchar(32)
);

CREATE TABLE LESSON
(
  id SERIAL PRIMARY KEY,
  name varchar(32),
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE SCORE
(
  id SERIAL PRIMARY KEY,
  value int UNIQUE NOT NULL,
  date date NOT NULL,
  username varchar(32),
  gameId int,

  FOREIGN KEY (username) REFERENCES USERS(username),
  FOREIGN KEY (gameId) REFERENCES GAME(id)
);

CREATE TABLE SCOREDWITH
(
  scoreValue int NOT NULL,
  guildName varchar(32) NOT NULL,

  PRIMARY KEY (scoreValue,guildName),

  FOREIGN KEY (scoreValue) REFERENCES SCORE(value),
  FOREIGN KEY (guildName) REFERENCES GUILD(name)
);

CREATE TABLE ISADVENTURE
(
  scoreValue int,
  levelId int,

  PRIMARY KEY (scoreValue, levelId),

  FOREIGN KEY (scoreValue) REFERENCES SCORE(value),
  FOREIGN KEY (levelId) REFERENCES LEVEL(id)
);

CREATE TABLE FRIEND
(
  user1 varchar(32) NOT NULL,
  user2 varchar(32) NOT NULL,
  accepted boolean,

  PRIMARY KEY (user1, user2),

  FOREIGN KEY (user1) REFERENCES USERS(username),
  FOREIGN KEY (user2) REFERENCES USERS(username)

);

CREATE TABLE BELONG
(
  guildName varchar(32) NOT NULL,
  username varchar(32) NOT NULL,

  PRIMARY KEY (guildName, username),

  FOREIGN KEY (guildName) REFERENCES GUILD(name),
  FOREIGN KEY (username) REFERENCES USERS(username)
);

CREATE TABLE LEADS
(
  guildName varchar(32) UNIQUE NOT NULL,
  username varchar(32) NOT NULL,

  PRIMARY KEY (guildName, username),

  FOREIGN KEY (guildName) REFERENCES GUILD(name),
  FOREIGN KEY (username) REFERENCES USERS(username)
);

CREATE TABLE FAVORITES
(
  username varchar(32) NOT NULL,
  gameId int NOT NULL,

  PRIMARY KEY (username, gameId),

  FOREIGN KEY (username) REFERENCES USERS(username),
  FOREIGN KEY (gameId) REFERENCES GAME(id)
);

CREATE TABLE ISABOUT
(
  lessonId int NOT NULL,
  gameId int NOT NULL,

  PRIMARY KEY (lessonId, gameId),

  FOREIGN KEY (lessonId) REFERENCES LESSON(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id)
);

CREATE TABLE SUCCESS
(
  id SERIAL PRIMARY KEY,
  name TEXT,
  avatar TEXT,
  description TEXT
);

CREATE TABLE ACHIEVED
(
  successId int NOT NULL,
  username varchar(32) NOT NULL,

  PRIMARY KEY (successId, username),

  FOREIGN KEY (successId) REFERENCES SUCCESS(id),
  FOREIGN KEY (username) REFERENCES USERS(username)
);
