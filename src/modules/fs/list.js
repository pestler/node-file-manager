import path from 'path';
import { existsSync, readdirSync } from 'fs';
import { getPathUrl } from '../util/get-url-path.js'
import { PropertyRequiredError } from '../util/validation-error.js'

const filesDir = 'files';
const sourcePath = path.resolve(getPathUrl(import.meta.url), filesDir);

export const list = async () => {    
        const filesExistsSync = existsSync(sourcePath);        
        if (!filesExistsSync) {
            throw new PropertyRequiredError('FS operation failed');
        }    
    } 
    const files = readdirSync(sourcePath);    
    console.log(files.join(', '))  
await list();

