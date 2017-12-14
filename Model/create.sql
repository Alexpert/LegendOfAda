

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
  name varchar(32) PRIMARY KEY
);

CREATE TABLE LEVEL
(
    id SERIAL PRIMARY KEY,
    worldName varchar(32),
    nextLevel int,
    gameName varchar(32),
    x int,
    y int,

    FOREIGN KEY (worldName) REFERENCES WORLD(name),
    FOREIGN KEY (nextLevel) REFERENCES LEVEL(id),
    FOREIGN KEY (gameName) REFERENCES GAME(name)
);

CREATE TABLE WORLD
(
  name varchar(32) PRIMARY KEY
);

CREATE TABLE LESSON
(
  id SERIAL PRIMARY KEY,
  name varchar(32),
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE THEME
(
  id SERIAL PRIMARY KEY,
  name varchar(32),
);

CREATE TABLE SCORE
(
  id SERIAL PRIMARY KEY,
  value int UNIQUE NOT NULL,
  date date NOT NULL,
  username varchar(32),
  gameName varchar(32),

  FOREIGN KEY (username) REFERENCES USERS(username),
  FOREIGN KEY (gameName) REFERENCES GAME(name)
);

CREATE INDEX PK_score ON SCORE (value, date, username, gameName);

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
  gameName varchar(32) NOT NULL,

  PRIMARY KEY (username, gameName),

  FOREIGN KEY (username) REFERENCES USERS(username),
  FOREIGN KEY (gameName) REFERENCES GAME(name)
);

CREATE TABLE ISABOUT
(
  lessonId int NOT NULL,
  gameName varchar(32) NOT NULL,

  PRIMARY KEY (lessonId, gameName),

  FOREIGN KEY (lessonId) REFERENCES LESSON(id),
  FOREIGN KEY (gameName) REFERENCES GAME(name)
);
