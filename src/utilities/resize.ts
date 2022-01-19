import sharp from 'sharp';

async function resize(
    filename: string,
    width: number,
    height: number,
    inPath: string,
    outPath: string,
    test = false
): Promise<void> {
    await sharp(inPath + `/${filename}.png`)
        .resize(width as number, height as number)
        .toFile(outPath + `/${filename}_${height}x${width}.png`);
}

export default resize;
