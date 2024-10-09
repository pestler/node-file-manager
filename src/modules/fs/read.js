import path from 'path';
import { existsSync, createReadStream } from 'fs';
import { getPathUrl } from '../util/get-url-path.js'
import { PropertyRequiredError } from '../util/validation-error.js'
import {process} from 'node:process';

const filesDir = 'files';

const sourceFile = path.resolve(getPathUrl(import.meta.url), filesDir, 'fileToRead.txt');

export const read = async () => {
        const sourceFileExist = existsSync(sourceFile);
        if (!sourceFileExist) {
            throw new PropertyRequiredError('FS operation failed');
        }
        const streamRead = createReadStream(sourceFile, 'utf-8');
        streamRead.on('data', (chunk) => process.stdout.write(chunk));
    } 
await read();



