import { resolve } from 'path';
import {mkdir} from 'fs';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';

export const copy = async (dirname, path_to_file, path_to_new_directory) => {
    try {
        const currentPath = resolve(dirname, path_to_file);
        const failName = path.basename(currentPath)
        mkdir(path_to_new_directory, { recursive: true }, async (err) => {
            if (err) throw Error('Failed to create folder(s)');
        });
        const targetPath = resolve(path.join(path_to_new_directory, failName));

        const readStream = createReadStream(currentPath);
        const writeStream = createWriteStream(targetPath);

        readStream.pipe(writeStream);
        readStream.on('error', () => {
            console.log('Operation failed');
        });

        writeStream.on('close', () => {
            console.log('File copied successfully');
        });
    } catch (error) {
        console.log('Operation failed');
    }

}


//cp c:\users\aleh\text.txt c:\test