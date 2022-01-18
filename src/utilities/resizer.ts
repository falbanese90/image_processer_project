import sharp from 'sharp';
import { promises as fs } from 'fs';
import express from 'express';

let inPath = './build/assets/full';
let outPath = './build/assets/thumbnail';

const resizer = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    let filename = req.query.filename;
    let height = Number(req.query.height);
    let width = Number(req.query.width);
    async function resize(filename: unknown) {
        try {
            await sharp(inPath + `/${filename}.png`)
                .resize(width as number, height as number)
                .toFile(outPath + `/${filename}_${height}x${width}.png`);
        } catch (error) {
            console.log(error);
        }
    }
    resize(filename);
    setTimeout(() => {
        res.sendFile(`${filename}_${height}x${width}.png`, {root: outPath});
    }, 2000)
};

export default resizer;
