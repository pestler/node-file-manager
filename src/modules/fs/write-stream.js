import path from 'path'
import { createWriteStream } from 'fs';
import {process, stdin, stderr, exit } from 'process';
/* import process from 'node:process'; */
import { getPathUrl } from '../util/get-url-path.js';

const filesDir = 'files';
export const writestream = async () => {
    const fileWrite = path.resolve(getPathUrl(import.meta.url), filesDir, 'fileToWrite.txt')
    const fileToWrite = createWriteStream(fileWrite)

    stdin.pipe(fileToWrite).on('error', (err) => stderr.write(err))
    process.on('SIGINT', () => {
        fileToWrite.end();
        exit();
    })    
};

await writestream();


