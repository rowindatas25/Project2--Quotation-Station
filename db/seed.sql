DROP DATABASE IF EXISTS quotes_db;
CREATE DATABASE quotes_db;
\c quotes_db

DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  thread_id VARCHAR NOT NULL
);

CREATE TABLE quotes (
	id SERIAL PRIMARY KEY,
	quote VARCHAR,
	author VARCHAR,
	user_id integer REFERENCES users(id)
);
