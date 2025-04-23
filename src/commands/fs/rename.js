import fs from 'fs';
import { resolve } from 'path';



export const renameFile = async (dirname, path_to_file, new_filename) => {
    const currentPath = resolve(dirname, path_to_file);
    const targetPath = resolve(dirname, new_filename);

    fs.rename(currentPath, targetPath, (err) => {
        if (err) {
            console.log('Operation failed');
            return
        }
        console.log('file renamed');
    })
}


