import { resolve } from 'path';
import { promises as fsPromises } from 'fs';

export const add = async (dirname, filename) => {
    try {
        const currentPath = resolve(dirname, filename);


        await fsPromises.writeFile(currentPath, '');

        console.log(`File "${filename}" was successfully created in "${dirname}"\n`);
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
