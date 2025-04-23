import { join, resolve } from 'path';
import { mkdir, promises as fsPromises } from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

export const compress = async (dirname, path_to_file, path_to_new_directory) => {
    const brotli = zlib.createBrotliCompress();
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = path.parse(currentPath).base + '.br';

        console.log(failName);


        await fsPromises.mkdir(resolve(dirname, path_to_new_directory), { recursive: true });

        const targetPath = resolve(dirname, path_to_new_directory);
        const targetPathFile = join(targetPath, failName);


        if (!fsPromises.access(currentPath)) {
            throw new Error('File not found');
        }


        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPathFile);

        
        readStream.pipe(brotli).pipe(writeStream);

        readStream.on('error', (err) => {
            console.error('Read error:', err);
        });

        writeStream.on('close', () => {
            console.log('File compressed');
        });
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
};
