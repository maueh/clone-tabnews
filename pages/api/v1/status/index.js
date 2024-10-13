import { Client } from "pg";
import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const updateAt2 = Date.now();

  //Connecting do the databse
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();

  //Preparing the values to return
  const dbVersion = await database.query(
    "SELECT current_setting('server_version') AS version;",
  );
  const maxConnections = await database.query("SHOW max_connections;");
  const usedConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity;",
  );

  response.status(200).json({
    update_at: updateAt,
    update2: updateAt2,
    database_version: dbVersion.rows[0].version,
    max_connections: maxConnections.rows[0].max_connections,
    used_connections: usedConnections.rows[0].count,
  });
  await client.end();
}
export default status;
