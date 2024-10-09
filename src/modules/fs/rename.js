import path from 'path';
import { existsSync } from 'fs';
import { rename as renamePromise } from 'fs/promises';
import { getPathUrl } from '../util/get-url-path.js'
import { PropertyRequiredError } from '../util/validation-error.js'

const filesDir = 'files';

export const rename = async () => {
    const sourceFile = path.resolve(getPathUrl(import.meta.url), filesDir, 'wrongFilename.txt');
    const targetRenameFile = path.resolve(getPathUrl(import.meta.url), filesDir, 'wrongFilename.md');
    
        const sourceFileExist = existsSync(sourceFile);
        const targetFileExists = existsSync(targetRenameFile);

        if (!sourceFileExist || targetFileExists) {
            throw new PropertyRequiredError('FS operation failed');
        }
        await renamePromise(sourceFile, targetRenameFile);
    } 

await rename();


