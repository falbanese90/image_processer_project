import sharp from 'sharp';
import fs from 'fs';
import express from 'express';

let inPath = './build/assets/full';
let outPath = './build/assets/thumbnail';

const resizer = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    if (req.query.filename && req.query.height && req.query.width) {
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
        if (fs.existsSync(outPath + `/${filename}_${height}x${width}.png`)) {
            res.sendFile(`${filename}_${height}x${width}.png`, { root: outPath });
        } else {
            resize(filename);
            setTimeout(() => {
                res.sendFile(`${filename}_${height}x${width}.png`, {
                    root: outPath,
                });
            }, 2000);
        }
    } else {
        res.send('Enter params');
    }
};

export default resizer;
