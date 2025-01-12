const Pool = require("pg").Pool;
const Pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: "5432",
    database: "election_db"
});

export { pool };