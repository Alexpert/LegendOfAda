

CREATE TABLE USER
(
  username varchar(32) PRIMARY KEY,
  password varchar(256)
);

CREATE TABLE GUILD
(
  name varchar(32) PRIMARY KEY,
  username varchar(32),

  FOREIGN KEY(username) REFERENCES USER(username)
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
  value int UNIQUE NOT NULL,
  date date NOT NULL,
  username varchar(32),
  gameName varchar(32),

  PRIMARY KEY (value, date, username, gameName)

  FOREIGN KEY (username) REFERENCES USER(username),
  FOREIGN KEY (gameName) REFERENCES GAME(name)
);

CREATE INDEX

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
