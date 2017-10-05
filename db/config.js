const pgp = require('pg-promise')();

const connection = {
	host: 'localhost',
	port: 5432,
	database: 'quotes_db',
	user: 'rohtaswadera'

}

const db = pgp(connection);

module.exports = db;