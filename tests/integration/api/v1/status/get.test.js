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

  //postgres version
  describe("Checking Postgres Version", () => {
    test("dbVersion should be defined", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
      expect(responseBody.database_version).toBeDefined();
    });
  });

  //maximumConnections
  describe("Checking maximum connections", () => {
    test("max_connections should be defined", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
      expect(responseBody.max_connections).toBeDefined();
      expect(parseInt(responseBody.max_connections)).toBeGreaterThanOrEqual(0);
      expect(parseInt(responseBody.max_connections)).toBeLessThanOrEqual(100);
    });
  });

  //usedConnections
  describe("Checking used_connections", () => {
    test("max_connections should be defined", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
      console.log("m: " + responseBody.used_connections);
      expect(responseBody.used_connections).toBeDefined();
      expect(parseInt(responseBody.used_connections)).toBeGreaterThanOrEqual(0);
      expect(parseInt(responseBody.used_connections)).toBeLessThanOrEqual(
        parseInt(responseBody.max_connections),
      );
    });
  });
});
