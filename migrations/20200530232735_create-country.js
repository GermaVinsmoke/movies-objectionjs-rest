exports.up = async function(knex) {
	await knex.schema.createTable('country', table => {
		table.increments('country_id');
		table.string('country_name');
	});

	await knex.schema.createTable('production_company', table => {
		table
			.integer('movie_id')
			.unsigned()
			.notNullable()
			.references('movie_id')
			.inTable('movie')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('country_id')
			.unsigned()
			.notNullable()
			.references('country_id')
			.inTable('country')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('production_company');
	await knex.schema.dropTableIfExists('country');
};
