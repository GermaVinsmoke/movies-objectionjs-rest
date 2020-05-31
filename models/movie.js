const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Movie extends Model {
	static get tableName() {
		return 'movie';
	}

	static get relationMappings() {
		const Country = require('./country');
		const Person = require('./person');
		const Department = require('./department');

		return {
			country: {
				modelClass: Country,
				relation: Model.ManyToManyRelation,
				join: {
					from: 'movie.movie_id',
					through: {
						from: 'production_country.movie_id',
						to: 'production_country.country_id'
					},
					to: 'country.country_id'
				}
			},

			person: {
				modelClass: Person,
				relation: Model.ManyToManyRelation,
				join: {
					from: 'movie.movie_id',
					through: {
						from: 'movie_crew.movie_id',
						to: 'movie_crew.person_id'
					},
					to: 'person.person_id'
				}
			},

			department: {
				modelClass: Department,
				relation: Model.ManyToManyRelation,
				join: {
					from: 'movie.movie_id',
					through: {
						from: 'movie_crew.movie_id',
						to: 'movie_crew.department_id'
					},
					to: 'department.department_id'
				}
			}
		};
	}
}

module.exports = Movie;
