exports.up = async function(knex) {
	await knex.schema.createTable('person', table => {
		table.increments('person_id');
		table.string('person_name').notNullable();
	});

	await knex.schema.createTable('department', table => {
		table.increments('department_id');
		table.string('department_name').notNullable();
	});

	await knex.schema.createTable('movie_crew', table => {
		table
			.integer('movie_id')
			.unsigned()
			.notNullable()
			.references('movie_id')
			.inTable('movie')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('person_id')
			.unsigned()
			.notNullable()
			.references('person_id')
			.inTable('person')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('department_id')
			.unsigned()
			.notNullable()
			.references('department_id')
			.inTable('department')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.string('job').notNullable();
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('movie_crew');
	await knex.schema.dropTableIfExists('person');
	await knex.schema.dropTableIfExists('department');
};
