

async function testFetch() {

   const res = await fetch('http://localhost:8080/api/recipes');

   expect(res.status).toBe(200);

   expect(res.ok).toBe(true);

   const data = await res.json();

   expect(data).toBeDefined();

   console.log(data);
}