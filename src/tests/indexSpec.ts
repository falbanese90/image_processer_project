import app from '../index';
import supertest from 'supertest';
import resizer from '../utilities/resizer';


const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the main root endpoint', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
    it('gets the image endpoint', async () => {
        const response = await request.get('/image');
        expect(response.status).toBe(200);
        });
});

