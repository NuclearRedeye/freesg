import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'postgres',
})
 
export async function query(text: string, params: string[] = []) {
  return await pool.query(text, params);
}
 
export async function check() {
  try {
    const result = await pool.query('SELECT $1::text as message', ['Connected to DB'])
    console.log(result.rows[0].message);
  } catch (err) {
    console.error(err);
  }
}
