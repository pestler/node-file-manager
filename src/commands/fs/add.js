import path from 'path';
import { stat, writeFile } from 'fs';
import { PropertyRequiredError } from '../util/validation-error.js'
import { output } from '../../lib/output.js';

const callbackError = (err) => {
    if (err) throw err;
}

export const add = async (dirname, filename) => {    
    console.log(dirname, filename);
    const currentPath = path.resolve(dirname, filename);          
    stat(currentPath, (error) => {
        if (error == null) {
            throw new PropertyRequiredError('FS operation failed');
        } else if (error.code === 'ENOENT') {
            writeFile(currentPath, '', 'utf8', callbackError);
            console.log(
                output('green',` file ${filename} was successfully created in ${dirname}\n`)
                );            
        } 
    })
};

