import pg from 'pg'
const { Pool, Client } = pg

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'postgres',
})

await client.connect()
 
export async function testDB() {
  try {
    const res = await client.query('SELECT $1::text as message', ['Hello Joel!'])
    console.log(res.rows[0].message) // Hello world!
  } catch (err) {
    console.error(err);
  } finally {
    await client.end()
  }
}
