import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the main root endpoint', async(done: DoneFn) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    })
});
