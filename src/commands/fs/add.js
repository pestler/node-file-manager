import {resolve} from 'path';
import { writeFile } from 'fs';

export const add = async (dirname, filename) => {        
    const currentPath = resolve(dirname, filename);          

    writeFile(currentPath, '', function(error){
        if(error){  
            return console.log('Operation failed');
        }
        console.log( `file ${filename} was successfully created in ${dirname}\n`);        
    });
};

