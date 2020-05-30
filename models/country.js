const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Country extends Model {
	static get tableName() {
		return 'country';
	}
}

module.exports = Country;
