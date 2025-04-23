import { join, resolve } from 'path';
import { mkdir } from 'fs';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';



export const decompress = async (dirname, path_to_file, path_to_new_directory) => {
    const brotli = zlib.createBrotliDecompress();
    try {
        const currentPath = path_to_file;
        const failName = path.parse(currentPath).name
        mkdir(path_to_new_directory, { recursive: true }, async (err) => {
            if (err) throw Error('Failed to create folder(s)');
        });



        const targetPath = resolve(dirname, (path_to_new_directory))
        const targetPathFile = join(targetPath, failName)

        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPathFile);

        readStream.pipe(brotli).pipe(writeStream);
        readStream.on('error', () => {
            console.log('Operation failed');
        });

        writeStream.on('close', () => {
            console.log('File decompress');
        });
    } catch (error) {
        console.log('Operation failed', error);
    }
};



