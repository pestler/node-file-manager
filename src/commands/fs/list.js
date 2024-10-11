import path from 'path';
import { existsSync, readdirSync } from 'fs';
import { PropertyRequiredError } from '../util/validation-error.js'
import { output } from '../../lib/output.js';

export const list = async (dirname) => { 
    const currentPath = path.resolve(dirname);            
        const filesExistsSync = existsSync(currentPath);        
        if (!filesExistsSync) {
            throw new PropertyRequiredError('FS operation failed');
        }       
    const files = readdirSync(currentPath);        
    console.log(
        output('green', `${files.join('\n')}` )
    )
}


