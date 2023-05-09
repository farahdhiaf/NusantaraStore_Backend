require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;
const db_url = process.env.DB_URL;

module.exports = { 
    db_name, 
    db_user, 
    db_pass, 
    db_port, 
    db_host 
};