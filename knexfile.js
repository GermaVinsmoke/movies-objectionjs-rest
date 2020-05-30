const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {
	development: {
		client: 'mysql',
		connection: {
			database: process.env.db,
			user: process.env.user,
			password: process.env.password,
			host: process.env.host
		},
		migrations: {
			directory: path.join(__dirname, 'migrations')
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};
