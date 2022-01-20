import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the main root endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it('gets the image endpoint', async () => {
        const response = await request.get(
            '/image?filename=40_winter_way&height=100&width=100'
        );
        expect(response.status).toBe(200);
    });
});
