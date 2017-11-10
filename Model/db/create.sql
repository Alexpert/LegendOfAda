CREATE TABLE SALOON
(
  id int PRIMARY KEY NOT NULL
);

CREATE TABLE USER
(
  id int PRIMARY KEY NOT NULL,
  username varchar(32),
  name varchar(32),
  student boolean,
  password varchar(256)
);

CREATE TABLE GUILD
(
  id int PRIMARY KEY NOT NULL,
  name varchar(32),
  description varchar(2048),
  standalone boolean,
  leaderId int,
  worldId int,

  FOREIGN KEY (leaderId) REFERENCES USER(id),
  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE GAME
(
  name varchar(32) PRIMARY KEY NOT NULL,
  worldId int,

  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE WORLD
(
  name varchar(32) PRIMARY KEY NOT NULL,
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE LESSON
(
  name varchar(32) PRIMARY KEY NOT NULL,
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE THEME
(
  name varchar(32) PRIMARY KEY NOT NULL,
  worldId int,

  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE CHAT
(
  userID int PRIMARY KEY NOT NULL,
  saloonId int,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (saloonId) REFERENCES SALOON(id)
);

CREATE TABLE SCORE
(
  userID int PRIMARY KEY NOT NULL,
  gameId int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id)
);

CREATE TABLE BELONG
(
  userID int,
  guildId int,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (guildId) REFERENCES GUILD(id),

  CONSTRAINT PK_BELONG PRIMARY KEY(userId, guildId)
);

CREATE TABLE ISINTERESTED
(
  userId int NOT NULL,
  lessonId int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (lessonId) REFERENCES LESSON(id),

  CONSTRAINT PK_ISINTERESTED PRIMARY KEY(userId, lessonId)
);

CREATE TABLE FAVORITE
(
  userId int NOT NULL,
  gameId int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  CONSTRAINT PK_FAVORITE PRIMARY KEY(userId, gameId)
);

CREATE TABLE FINISHED
(
  userId int NOT NULL,
  worldId int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (worldId) REFERENCES WORLD(id),

  CONSTRAINT PK_FINISHED PRIMARY KEY(userId, worldId)
);

CREATE TABLE ISABOUT
(
  gameId int NOT NULL,
  lessonId int NOT NULL,

  FOREIGN KEY (gameId) REFERENCES GAME(id),
  FOREIGN KEY (lessonId) REFERENCES LESSON(id),

  CONSTRAINT PK_ISABOUT PRIMARY KEY(gameId, lessonId)
);
