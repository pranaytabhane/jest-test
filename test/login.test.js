const request = require('supertest')
const app = require('../app')

describe('Login API /post', () => { 
    test('login with valid credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'user', password: 'password' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login successful');
        expect(res.body).toHaveProperty('user');
    })
    test('login error with invalid username or password', async () => {
        const res = await request(app)
                    .post('/login')
                    .send({ username: 'invaliduser', password: 'password' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Invalid username or password');
    }) 
    test('login error with empty username or password', async () => {
        const res = await request(app)
                    .post('/login')
                    .send({ password: 'password' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Invalid username or password');
    }) 
})