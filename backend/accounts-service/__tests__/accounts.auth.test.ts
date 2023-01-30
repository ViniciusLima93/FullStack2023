import request from 'supertest';
import app from '../src/app';
import { IAccount } from '../src/models/account';
import repository from '../src/models/accountRepository';
import {jest,describe,expect,it,beforeAll, afterAll} from '@jest/globals'

const testEmail = 'jest@jest.com';
const hashPassword = '$2a$10$p.8IHcrr5YGw8vuGjs948uBaIb0.YKeVB6KZotNDmZ5a2fZGd6zNu'
const testPassword = '123456';


beforeAll(async () => {
    const testAccount : IAccount = {
        name:'jest',
        email:testEmail,
        password:hashPassword,
        domain:'jest.com'
    }

    const result = await repository.add(testAccount);
    
})

afterAll(async() => {
    const result = await repository.removeByEmail(testEmail);
    

})

describe ('Testando rotas de autenticação', () => {
    it('POST /accounts/login - 200 ok', async () => {
        //testing
        const payload = {
            email:testEmail,
            password:testPassword,
        }        

        const resultado = await request(app)
                .post('accounts/login')
                .send(payload)        

              expect(resultado.status).toEqual(200);
              expect(resultado.body.auth).toBeTruthy();
              expect(resultado.body.token).toBeTruthy();  
    })
});

describe ('Testando rotas de autenticação', () => {
    it('POST /accounts/login - 422 Unprocessable Entity', async () => {
        const payload = {
            email:testEmail,
            password:'abc'
        }

        const resultado = await request(app)
                .post ('accounts/login')
                .send(payload);

              expect(resultado.status).toEqual(422);
             
    })
})

describe ('Testando rotas de autenticação', () => {
    it('POST /accounts/login - 401 Unauthorized', async () => {
        const payload = {
            email:testEmail,
            password:testPassword+'1'
        }

        const resultado = await request(app)
                .post ('accounts/login')
                .send(payload);

              expect(resultado.status).toEqual(401);
             
    })
})

describe ('Testando rotas de autenticação', () => {
    it('POST /accounts/logout - 200 ok', async () => {
      

        const resultado = await request(app)
                .post ('accounts/logout')
              

              expect(resultado.status).toEqual(200);
             
    })
})