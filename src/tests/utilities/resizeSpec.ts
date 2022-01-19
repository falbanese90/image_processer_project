import resize from '../../utilities/resize';

describe('Image resize test', () => {
    it('Image is created and resized', () => {
        let inPath = './build/assets/full';
        let outPath = './build/assets/thumbnail';
        let filename = '40_winter_way';
        let height = 10;
        let width = 10;
        expect(resize(filename, width, height, inPath, outPath)).toBeTruthy();
    });
});
