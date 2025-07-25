const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/users');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
describe('Users API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/users').send({ name: 'Kushal' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Kushal');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
