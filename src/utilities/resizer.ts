import sharp from 'sharp';
import fs from 'fs';
import express from 'express';
import resize from './resize';

let inPath = './build/assets/full';
let outPath = './build/assets/thumbnail';

const resizer = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    if (req.query.filename && req.query.height && req.query.width) {
        let filename = req.query.filename as string;
        let height = Number(req.query.height);
        let width = Number(req.query.width);
        try {
            resize(filename, width, height, inPath, outPath);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
        if (fs.existsSync(outPath + `/${filename}_${height}x${width}.png`)) {
            res.sendFile(`${filename}_${height}x${width}.png`, {
                root: outPath,
            });
        } else {
            resize(filename, width, height, inPath, outPath);
            setTimeout(() => {
                res.sendFile(`${filename}_${height}x${width}.png`, {
                    root: outPath,
                });
            }, 2000);
        }
    } else {
        res.send('Enter params // filename = 40_winter_way, height, width');
    }
};

export default resizer;
