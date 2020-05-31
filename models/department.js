const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Department extends Model {
	static get tableName() {
		return 'department';
	}
}

module.exports = Department;
