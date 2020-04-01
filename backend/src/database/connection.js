const knex = require('knex');
const configuration = require('../../knexfile');

//const config = process.env.VARIVAEL === 'test' ? configuration.test : configuration.development;

//const connection = knex(config);
const connection = knex(configuration.development);
module.exports = connection;