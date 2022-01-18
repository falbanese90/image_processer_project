import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main api route');
    console.log(req.query);
});

routes.use('/image', image);

export default routes;
