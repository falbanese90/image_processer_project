import sharp from 'sharp';
import checkFile from '../utilities/checkFile';

async function resize(
    filename: string,
    width: number,
    height: number,
    inPath: string,
    outPath: string
): Promise<void> {
    if (!(await checkFile(outPath + `/${filename}_${height}x${width}.png`))) {
        await sharp(inPath + `/${filename}.png`)
            .resize(width as number, height as number)
            .toFile(outPath + `/${filename}_${height}x${width}.png`);
    }
}

export default resize;
