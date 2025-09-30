import pg from "pg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "intellisight",
  password: "ozair",
  port: 5000,
});
db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("DB Connection Error:", err));

export default db;