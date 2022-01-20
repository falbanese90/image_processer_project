import checkFile from '../../utilities/checkFile';

describe('Expects file does exist', () => {
    it('Image exists, checked successfully', async () => {
        const filePath = './src/assets/thumbnail/40_winter_way_10x10.png';
        expect(await checkFile(filePath)).toBe(true);
    });
});
