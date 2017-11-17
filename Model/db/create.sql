CREATE TABLE SALOON
(
  id int PRIMARY KEY NOT NULL
);

CREATE TABLE USER
(
  id int PRIMARY KEY NOT NULL,
  username varchar(32) UNIQUE,
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
  id int PRIMARY KEY NOT NULL,
  name varchar(32),
  worldId int,

  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE WORLD
(
  id int PRIMARY KEY NOT NULL,
  name varchar(32),
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE LESSON
(
  id int PRIMARY KEY NOT NULL,
  name varchar(32),
  themeId int,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE THEME
(
  id int PRIMARY KEY NOT NULL,
  name varchar(32),
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
  userId int NOT NULL,
  gameId int NOT NULL,
  highScore int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  CONSTRAINT PK_SCORE PRIMARY KEY(userID, gameId)
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
  guildId int NOT NULL,
  worldId int NOT NULL,

  FOREIGN KEY (guildId) REFERENCES GUILD(id),
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

CREATE TABLE FRIEND
(
  user1Id int NOT NULL,
  user2Id int NOT NULL,

  FOREIGN KEY (user1Id) REFERENCES USER(id),
  FOREIGN KEY (user2Id) REFERENCES USER(id),

  CONSTRAINT PK_FRIEND PRIMARY KEY(user1Id, user2Id)
);

CREATE TABLE CONNECTED
(
  game1Id int NOT NULL,
  game2Id int NOT NULL,

  FOREIGN KEY (game1Id) REFERENCES GAME(id),
  FOREIGN KEY (game2Id)
);

CREATE TABLE COMPLETED
(
  userId int NOT NULL,
  gameId int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  PRIMARY KEY PK_COMPLETED PRIMARY KEY(userId, gameId)
);
