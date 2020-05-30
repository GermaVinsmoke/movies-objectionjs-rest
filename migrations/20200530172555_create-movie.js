exports.up = async function(knex) {
	await knex.schema.createTable('movie', table => {
		table.increments('movie_id');
		table.string('title').notNullable();
		table.text('overview').notNullable();
		table.decimal('popularity').defaultTo(0);
		table.date('release_date').notNullable();
		table.integer('revenue').defaultTo(0);
		table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
		table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('movie');
};
