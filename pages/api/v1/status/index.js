import { Client } from "pg";
import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  // const updateAt2 = Date.now();

  //Preparing the values to return
  // "SELECT version();" dbVersion.rows[0].version
  // "SELECT current_setting('server_version') AS version;" dbVersion.rows[0].version
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue = parseInt(
    databaseMaxConnectionsResult.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  //console.log(databaseOpenedConnectionsResult);
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  //console.log("max: " + databaseMaxConnectionsValue);
  //console.log("Using: " + databaseOpenedConnectionsValue);

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: databaseMaxConnectionsValue,
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
  //await client.end();
}
export default status;
