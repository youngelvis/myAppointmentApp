exports.up = function(knex) {
    return knex.schema
        .createTable('user', (table)=>{
            table.uuid('userId').notNullable().primary();
            table.string('username').notNullable();
            table.string('accountType').notNullable();
            table.string('authType').notNullable();
            table.string('email').notNullable();
        })
        .createTable('business', (table)=>{
            table.uuid('businessId').notNullable().primary();
            table.string('businessName').notNullable();
            table.text('location').notNullable();
            table.text('description').notNullable();
            table.string('userId').notNullable().references('userId').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('product',(table)=>{
            table.uuid('productId').notNullable().primary();
            table.string('productName').notNullable();
            table.string('description').notNullable();
            table.string('price').notNullable();
            table.string('businessId').notNullable().references('businessId').inTable('business').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('appointment',(table) =>{
            table.uuid('appointmentId').notNullable().primary();
            table.string('date').notNullable();
            table.string('time').notNullable();
            table.string('productId').notNullable().references('productId').inTable('product').onDelete('CASCADE').onUpdate('CASCADE');
            table.string('businessId').notNullable().references('businessId').inTable('business').onDelete('CASCADE').onUpdate('CASCADE');
            table.string('userId').notNullable().references('userId').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('card', (table)=>{
            table.uuid('cardId').notNullable().primary();
            table.string('cardName').notNullable();
            table.string('cardNumber').notNullable();
            table.string('cvc').notNullable();
            table.string('userId').notNullable().references('userId').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('card')
        .dropTableIfExists('appointment')
        .dropTableIfExists('product')
        .dropTableIfExists('business')
        .dropTableIfExists('user');
};
