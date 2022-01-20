import resize from '../../utilities/resize';
import path from 'path';

describe('Image resize test', () => {
    it('Image is created and resized', () => {
        const inPath = path.join(__dirname + '../assets/full');
        const outPath = path.join(__dirname + '../assets/thumbnail');
        const filename = '40_winter_way';
        const height = 10;
        const width = 10;
        console.log(__dirname);
        expect(resize(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
