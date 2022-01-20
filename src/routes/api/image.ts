import express, { Response } from 'express';
import resizer from '../../utilities/resizer';

const image = express.Router();

image.get('/', resizer, (req: express.Request, res: express.Response) => {
    res.send('Main processing api');
});

export default image;
