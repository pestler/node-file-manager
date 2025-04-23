import { join, resolve, basename } from 'path';
import { promises as fsPromises, createReadStream, createWriteStream } from 'fs';
import { once } from 'events';

export const mv = async (dirname, path_to_file, path_to_new_directory) => {
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = basename(currentPath);
        const targetPath = resolve(dirname, path_to_new_directory);
        const targetPathFile = join(targetPath, failName);

        await fsPromises.mkdir(targetPath, { recursive: true });

        await fsPromises.access(currentPath).catch(() => {
            throw new Error('Source file not found');
        });

        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPathFile);


        readStream.pipe(writeStream);

        await once(writeStream, 'close');

        await fsPromises.rm(currentPath);

        console.log(`File "${failName}" was successfully moved to "${targetPath}"`);
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
