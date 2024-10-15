import path from 'path';
import { existsSync, readdirSync } from 'fs';
import { PropertyRequiredError } from '../util/validation-error.js'

export const list = async (dirname) => {
    const currentPath = path.resolve(dirname);
    const filesExistsSync = existsSync(currentPath);
    if (!filesExistsSync) {
        throw new PropertyRequiredError('FS operation failed');
    }
    const files = readdirSync(currentPath);
    console.log(
        `${files.join('\n')}`
    )
}


