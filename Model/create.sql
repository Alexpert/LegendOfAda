CREATE EXTENSION "pgcrypto";

CREATE TABLE SALOON
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4()
);

CREATE TABLE USER
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  username varchar(32) UNIQUE,
  name varchar(32),
  student boolean,
  password varchar(256)
);

CREATE TABLE GUILD
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(32),
  description varchar(2048),
  standalone boolean,
  leaderId uuid,
  worldId uuid,

  FOREIGN KEY (leaderId) REFERENCES USER(id),
  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE GAME
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(32) UNIQUE,
  description varchar(255),
  rule varchar(255),

  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE WORLD
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(32),
  themeId uuid,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE LESSON
(
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(32),
  themeId uuid,

  FOREIGN KEY (themeId) REFERENCES THEME(id)
);

CREATE TABLE THEME
(
  id uuid PRIMARY KEY NOT NULL uuid_generate_v4(),
  name varchar(32),
  worldId uuid,

  FOREIGN KEY (worldId) REFERENCES WORLD(id)
);

CREATE TABLE CHAT
(
  userID uuid PRIMARY KEY NOT NULL,
  saloonId uuid,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (saloonId) REFERENCES SALOON(id)
);

CREATE TABLE SCORE
(
  userId uuid NOT NULL,
  gameId uuid NOT NULL,
  highScore int NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  CONSTRAINT PK_SCORE PRIMARY KEY(userID, gameId)
);

CREATE TABLE BELONG
(
  userID uuid,
  guildId uuid,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (guildId) REFERENCES GUILD(id),

  CONSTRAINT PK_BELONG PRIMARY KEY(userId, guildId)
);

CREATE TABLE ISINTERESTED
(
  userId uuid NOT NULL,
  lessonId uuid NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (lessonId) REFERENCES LESSON(id),

  CONSTRAINT PK_ISINTERESTED PRIMARY KEY(userId, lessonId)
);

CREATE TABLE FAVORITE
(
  userId uuid NOT NULL,
  gameId uuid NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  CONSTRAINT PK_FAVORITE PRIMARY KEY(userId, gameId)
);

CREATE TABLE FINISHED
(
  guildId uuid NOT NULL,
  worldId uuid NOT NULL,

  FOREIGN KEY (guildId) REFERENCES GUILD(id),
  FOREIGN KEY (worldId) REFERENCES WORLD(id),

  CONSTRAINT PK_FINISHED PRIMARY KEY(userId, worldId)
);

CREATE TABLE ISABOUT
(
  gameId uuid NOT NULL,
  lessonId uuid NOT NULL,

  FOREIGN KEY (gameId) REFERENCES GAME(id),
  FOREIGN KEY (lessonId) REFERENCES LESSON(id),

  CONSTRAINT PK_ISABOUT PRIMARY KEY(gameId, lessonId)
);

CREATE TABLE FRIEND
(
  user1Id uuid NOT NULL,
  user2Id uuid NOT NULL,
  accepted boolean DEFAULT false,

  FOREIGN KEY (user1Id) REFERENCES USER(id),
  FOREIGN KEY (user2Id) REFERENCES USER(id),

  CONSTRAINT PK_FRIEND PRIMARY KEY(user1Id, user2Id)
);

CREATE TABLE CONNECTED
(
  game1Id uuid NOT NULL,
  game2Id uuid NOT NULL,

  FOREIGN KEY (game1Id) REFERENCES GAME(id),
  FOREIGN KEY (game2Id)
);

CREATE TABLE COMPLETED
(
  userId uuid NOT NULL,
  gameId uuid NOT NULL,

  FOREIGN KEY (userId) REFERENCES USER(id),
  FOREIGN KEY (gameId) REFERENCES GAME(id),

  PRIMARY KEY PK_COMPLETED PRIMARY KEY(userId, gameId)
);
