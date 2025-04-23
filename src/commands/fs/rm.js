import { resolve } from 'path';
import { promises as fsPromises } from 'fs';

export const deleteFile = async (dirname, filename) => {
    try {
        const currentPath = resolve(dirname, filename);

        await fsPromises.rm(currentPath, { recursive: true });

        console.log(`File "${filename}" has been deleted successfully`);
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
