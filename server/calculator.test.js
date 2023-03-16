describe("GET /api/", () => {
    it("should return hello world", async () => {
      const res = await fetch("http://localhost:4002/api/").then((response) => {
        expect(response.status).toBe(200);
        return response.json();

    })
      .then((data) => {
        expect(data.txt).toBe('Hello World!');
      });
    });
});