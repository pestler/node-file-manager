import { resolve } from 'path';
import { mkdir, rm } from 'fs';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
//mv path_to_file path_to_new_directory

export const mv = async (dirname, path_to_file, path_to_new_directory) => {
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
            console.log('');
        });

        rm(currentPath, { recursive: true }, (err) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log("File moved");
        })

    } catch (error) {
        console.log('Operation failed');
    }

}


//mv c:\users\aleh\text.txt c:\test