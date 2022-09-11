import 'dotenv/config'
import { Pool } from "pg"

const port = process.env.DB_PORT as number | undefined
const client:any = new Pool({
	user: process.env.DB_USER,
	host:  process.env.DB_HOST,
	database:  process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: port,
})

export default client
