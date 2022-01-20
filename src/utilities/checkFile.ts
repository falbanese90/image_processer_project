import { promises as fs, constants } from 'fs';

const checkFile = async (path: string): Promise<boolean> => {
    try {
        await fs.access(path, constants.F_OK);
    } catch (err) {
        return false;
    }
    return true;
};

export default checkFile;
