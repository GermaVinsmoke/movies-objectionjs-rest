const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Person extends Model {
	static get tableName() {
		return 'person';
	}
}

module.exports = Person;
