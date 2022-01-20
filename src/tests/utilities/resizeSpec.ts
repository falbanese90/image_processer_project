import resize from '../../utilities/resize';

describe('Image resize test', () => {
    it('Image is created and resized', () => {
        const inPath = './build/assets/full';
        const outPath = './build/assets/thumbnail';
        const filename = '40_winter_way';
        const height = 10;
        const width = 10;
        expect(resize(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
