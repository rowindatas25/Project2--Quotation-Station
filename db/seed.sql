CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR NOT NULL,
	password_digest VARCHAR NOT NULL

);

CREATE TABLE quotes (
	id SERIAL PRIMARY KEY,
	quote VARCHAR,
	author VARCHAR,
	user_id integer REFERENCES users(id)
);