import resize from '../../utilities/resize';
import path from 'path';

const outPath = path.join(__dirname, '../../../src/assets/thumbnail');
const inPath = path.join(__dirname, '../../../src/assets/full');

describe('Image resize test', () => {
    it('Image is created and resized', () => {
        const filename = '40_winter_way';
        const height = 10;
        const width = 10;
        expect(resize(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
