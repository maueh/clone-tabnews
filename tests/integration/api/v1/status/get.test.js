test.only("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  expect(responseBody.dependencies.database.version).toBe("16.0");

  expect(responseBody.dependencies.database.max_connections).toBe(100);

  expect(responseBody.dependencies.database.opened_connections).toBe(1);
});

/*
describe("database.js tests", () => {
  test("GET to /api/v1/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
  });

  test("UpdateAt should be defined as  ", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    // console.log(responseBody);
    // expect(1).toBe(1);
    expect(responseBody.update_at).toBeDefined();

    const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
    expect(responseBody.update_at).toEqual(parsedUpdateAt);
  });
});

//postgres version
describe("Checking Postgres Version", () => {
  test("dbVersion should be defined", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    expect(responseBody.dependencies.database.version).toBeDefined();
    expect(responseBody.dependencies.database.version).toBe("16.0");
  });
});

//maximumConnections
describe("Checking maximum connections", () => {
  test("max_connections should be defined", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    expect(responseBody.dependencies.database.max_connections).toBeDefined();
    expect(
      responseBody.dependencies.database.max_connections,
    ).toBeGreaterThanOrEqual(0);
    expect(
      responseBody.dependencies.database.max_connections,
    ).toBeLessThanOrEqual(100);
  });
});

//usedConnections
describe("Checking used_connections", () => {
  test("max_connections should be defined", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    console.log("m: " + responseBody.dependencies.database.used_connections);
    expect(responseBody.dependencies.database.used_connections).toBeDefined();
    expect(
      parseInt(responseBody.dependencies.database.used_connections),
    ).toBeGreaterThanOrEqual(0);
    expect(
      parseInt(responseBody.dependencies.database.used_connections),
    ).toBeLessThanOrEqual(
      parseInt(responseBody.dependencies.database.max_connections),
    );
  });
});
*/
