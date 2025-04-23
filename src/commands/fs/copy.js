import { join, resolve } from 'path';
import { promises as fsPromises, createReadStream, createWriteStream } from 'fs';

export const copy = async (dirname, path_to_file, path_to_new_directory) => {
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = path.basename(currentPath);
        const targetPath = resolve(dirname, path_to_new_directory);
        const targetPathFile = join(targetPath, failName);


        await fsPromises.mkdir(targetPath, { recursive: true });


        await fsPromises.access(currentPath).catch(() => {
            throw new Error('Source file not found');
        });


        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPathFile);


        readStream.pipe(writeStream);

        const { once } = require('events');
        await once(writeStream, 'close');

        console.log(`File "${failName}" was successfully copied to "${targetPath}"`);
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
