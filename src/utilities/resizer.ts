import sharp from 'sharp';
import { promises as fs } from 'fs';
import express from 'express';


const resizer = (req: express.Request, res: express.Response, next: Function): void => {
    let filename = req.query.filename;
    let height = Number(req.query.height);
    let width = Number(req.query.width);
    let path = './../../../static_image'
    async function resize(filename: unknown) {
        try {
            await sharp(__dirname+ `/${filename}.png`)
                .resize(width, height)
                .toFile(__dirname + `/new_pic.png`);
        } catch (error) {
            console.log(error);
        }
    }
    resize(filename);
    res.sendFile(__dirname + '/new_pic.png');
};

export default resizer;
