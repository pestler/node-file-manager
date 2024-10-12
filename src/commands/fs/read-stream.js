import path from 'path'
import { createReadStream } from 'fs';
import consoleLogColor from '../../lib/color-lib.js';


export const readstream = async (dirname, filename) => {
    const currentPath = path.resolve(dirname, filename);
    const streamRead = createReadStream(currentPath)    
    streamRead.on('data', (chunk) => {
            consoleLogColor('green',`Print file: ${chunk.toString()}\n`)
    });
};

