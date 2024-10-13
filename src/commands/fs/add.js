import path from 'path';
import { stat, writeFile } from 'fs';
import { PropertyRequiredError } from '../util/validation-error.js'

const callbackError = (err) => {
    if (err) throw err;
}

export const add = async (dirname, filename) => {        
    const currentPath = path.resolve(dirname, filename);          
    stat(currentPath, (error) => {
        if (error == null) {
            throw new PropertyRequiredError('FS operation failed');
        } else if (error.code === 'ENOENT') {
            writeFile(currentPath, '', 'utf8', callbackError);
            console.log(
                ` file ${filename} was successfully created in ${dirname}\n`
                );            
        } 
    })
};

