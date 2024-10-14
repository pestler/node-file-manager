import {resolve} from 'path';
import { rm } from 'fs';
//rm path_to_file

export const deleteFile = async (dirname, filename) => {        
    const currentPath = resolve(dirname, filename);          

    rm(currentPath, { recursive: true }, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("File delete");
    })
};

//rm c:\users\aleh\text.txt 