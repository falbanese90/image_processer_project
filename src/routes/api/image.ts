import express from 'express';
import resizer from '../../utilities/resizer';

const image = express.Router();

image.get('/', resizer, (req, res) => {
    res.send('Main processing api');
});

export default image;
