import fs from 'fs';
import { resolve } from 'path';
//rn path_to_file new_filename


export const renameFile = async (dirname, path_to_file, new_filename) => {
    const currentPath = resolve(dirname, path_to_file);
    const targetPath = resolve(dirname, new_filename);

    fs.rename(currentPath, targetPath, err => {
        if (!err) {
            console.log('file renamed');
        } else {
            console.log('Operation failed');
        }
    });
}


