import request from 'supertest';
import { IAccount } from '../src/models/account';
import app from './../src/app';

describe('Testando rotas do accounts', ()=> {

    it('GET/accounts - Deve retornar statusCode 200', async () => {
        const res = await request(app)
            .get('/accounts/');

            expect(res.status).toEqual(200);
            expect(Array.isArray(res.body)).toBeTruthy()
    })


    it('POST/accounts - Devce retornar status 201 ', async () => {
        const payload:IAccount = {
            name:"Jest",
            email:"jest@jest.com",
            password:"123456",
            domain:'jest.com' 
        
        }

        const res  = await request(app)
            .post('/accounts/')
            .send(payload)

        expect(res.status).toEqual(201);
        expect(res.body.id).toBe(1);
    })

    it('POST/accounts - Devce retornar status 422 ', async () => {
        const payload = {
            id:1,
            street:"Rua z",
            email:"vinicius@vincius.com",
            password:"123456",
            state:"rs"
        }

        const res  = await request(app)
            .post('/accounts/')
            .send(payload)

        expect(res.status).toEqual(422);
      
    })


    it('PATCH/accounts - Devce retornar status 200 ', async () => {
        const payload = {
          
            name:"Calebe",
            email:"vinicius@vincius.com",
            password:"123456789",
            
        }


        const res  = await request(app)
            .patch('/accounts/1')
            .send(payload)

        expect(res.status).toEqual(200);
        expect(res.body.id).toEqual(1);
      
    })


    it('PATCH/accounts - Devce retornar status 400 ', async () => {
        const payload = {
          
            name:"Vinicius Lima",
            email:"vinicius@vincius.com",
            password:"123456789",
            
        }


        const res  = await request(app)
            .patch('/accounts/abc')
            .send(payload)

        expect(res.status).toEqual(400);
      
    })

    it('PATCH/accounts - Devce retornar status 404 ', async () => {
        const payload = {
          
            name:"Vinicius Lima",
            email:"vinicius@vincius.com",
            password:"123456789",
            
        }


        const res  = await request(app)
            .patch('/accounts/-1')
            .send(payload)

        expect(res.status).toEqual(404);
      
    })

    it('GET/accounts/:id - Deve retornar statusCode 200', async () => {
        const res = await request(app)
            .get('/accounts/1');

            expect(res.status).toEqual(200);
            expect(res.body.id).toBe(1);
    })

    it('GET/accounts/:id - Deve retornar statusCode 404', async () => {
        const res = await request(app)
            .get('/accounts/2');

            expect(res.status).toEqual(404);
          
    })

    it('GET/accounts/:id - Deve retornar statusCode 400', async () => {
        const res = await request(app)
            .get('/accounts/abc');

            expect(res.status).toEqual(400);
          
    })
    
 
})