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
  standalone boolean
);

CREATE TABLE GAME
(
  name varchar(32) PRIMARY KEY NOT NULL
);

CREATE TABLE WORLD
(
  name varchar(32) PRIMARY KEY NOT NULL
);

CREATE TABLE LESSON
(
  name varchar(32) PRIMARY KEY NOT NULL
);

CREATE TABLE THEME
(
  name varchar(32) PRIMARY KEY NOT NULL
);
