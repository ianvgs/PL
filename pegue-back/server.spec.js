const request = require('supertest');
const app = require("./src/express/index");


describe('Teste do servidor', () => {
    it('Acessa a main route', async () => {
        const res = await request(app).get('http://localhost:3000/')
        expect(res.status).toBe(403)
    })
    it("Verifica a validação do metodo delete, sem enviar os dados necessários", () => {
      return request(app)
        .del("http://localhost:3000/clientes")
        .then(response => {
          expect(response.status).toBe(403);
        });
    });
});

