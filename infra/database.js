import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  console.log("Credenciais do Postgres: ", {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  try {
    await client.connect();
    const result = await client.query(queryObject);

    // const res = await client.query("SELECT $1::text as message", ["Hello"]);
    // console.log(res.rows[0].messsage);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    try {
      await client.end();
    } catch (error) {
      console.log("Erro ao tentar desconectar");
      console.error("Erro ao tentar desconectar");
    }
  }
}
export default {
  query: query,
};
