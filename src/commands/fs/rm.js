import {resolve} from 'path';
import { rm } from 'fs';


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


