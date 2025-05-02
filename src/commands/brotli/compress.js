import { join, resolve, parse } from 'path';
import { mkdir, promises as fsPromises } from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

export const compress = async (dirname, path_to_file, path_to_new_directory) => {
    if (!dirname) {
        console.error('Invalid input. Error: "dirname" is required.');
        return;
    }
    if (!path_to_file) {
        console.error('Invalid input. Error: "path_to_file" is required.');
        return;
    }
    if (!path_to_new_directory) {
        console.error('Invalid input. Error: "path_to_new_directory" is required.');
        return;
    }

    const brotli = zlib.createBrotliCompress();
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = parse(currentPath).base + '.br';

        console.log(`Compressing: ${failName}`);

        const targetPath = resolve(dirname, path_to_new_directory);
        const targetPathFile = join(targetPath, failName);

        await fsPromises.mkdir(targetPath, { recursive: true });

        try {
            await fsPromises.access(currentPath);
        } catch {
            throw new Error(`Operation failed. Source file not found: ${currentPath}`);
        }

        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPathFile);

        readStream.pipe(brotli).pipe(writeStream);

        readStream.on('error', (err) => {
            console.error('Operation failed. Read error:', err.message);
        });

        writeStream.on('close', () => {
            console.log(`File "${failName}" successfully compressed to "${targetPath}"`);
        });
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
};
