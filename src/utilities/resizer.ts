import express, { NextFunction } from 'express';
import resize from './resize';
import numberCheck from './numberCheck';
import path from 'path';

const inPath = path.join(__dirname, '../../src/assets/full');
const outPath = path.join(__dirname, '../../src/assets/thumbnail');

const resizer = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
): Promise<void> => {
    if (req.query.filename && req.query.height && req.query.width) {
        const filename = req.query.filename as string;
        const height = Number(req.query.height);
        const width = Number(req.query.width);
        if (numberCheck(height, width) && filename == '40_winter_way') {
            const a = async () => {
                try {
                    await resize(filename, width, height, inPath, outPath);
                } catch (e) {
                    res.send(e);
                }
            };
            await a();
            res.sendFile(`${filename}_${height}x${width}.png`, {
                root: outPath,
            });
        } else {
            res.send('Params are invalid');
        }
    } else {
        res.send('Insert params');
    }
};

export default resizer;
