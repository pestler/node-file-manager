import { resolve } from 'path';
import {mkdir} from 'fs';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

//compress path_to_file path_to_destination

export const compress = async (dirname, path_to_file, path_to_new_directory) => {
    const brotli = zlib.createBrotliCompress();
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = path.parse(currentPath).base + '.gz'
        console.log(failName);
        mkdir(path_to_new_directory, { recursive: true }, async (err) => {
            if (err) throw Error('Failed to create folder(s)');
        });
        const targetPath = resolve(path.join(path_to_new_directory, failName));

        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPath);

        readStream.pipe(brotli).pipe(writeStream);
        readStream.on('error', () => {
            console.log('Operation failed');
        });

        writeStream.on('close', () => {
            console.log('File compress');
        });
    } catch (error) {
        console.log('Operation failed');
    }
};


//compress c:\users\aleh\text.txt c:\test