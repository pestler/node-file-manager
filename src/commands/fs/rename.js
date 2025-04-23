import { promises as fsPromises } from 'fs';
import { resolve } from 'path';

export const renameFile = async (dirname, path_to_file, new_filename) => {
    try {
        const currentPath = resolve(dirname, path_to_file);
        const targetPath = resolve(dirname, new_filename);

        await fsPromises.rename(currentPath, targetPath);

        console.log(`File renamed to "${new_filename}"`);
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
