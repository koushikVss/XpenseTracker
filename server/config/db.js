const { Client } = require('pg');
const { config } = require('aws-sdk');
config.update({ region: 'ap-south-1' });

async function main() {
    let password = process.env.postgres_password;
    let user = process.env.postgres_username;
    let database = process.env.postgres_db;
    let port = process.env.postgres_port;
    let host = process.env.postgres_host;


    const client = new Client({
        host, port, database, user, password,
        ssl: { rejectUnauthorized: false }//, ca: require('fs').readFileSync('/certs/global-bundle.pem').toString() }
    });

    try {
        await client.connect();
        // const res = await client.query('SELECT version()');
        // console.log(res.rows[0].version);
        console.log("PostGres connected...")
    } catch (error) {
        console.error('Postgres Database error:', error);
        throw error;
    } finally {
        await client.end();
    }
}
main().catch(console.error);