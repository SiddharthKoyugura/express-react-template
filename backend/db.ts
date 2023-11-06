import {Pool} from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'perntodo'
})

export default pool;