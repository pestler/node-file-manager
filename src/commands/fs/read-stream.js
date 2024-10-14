import {resolve} from 'path'
import { createReadStream } from 'fs';

export const readstream = async (dirname, filename) => {    
    const currentPath = resolve(dirname, filename);
    
    const nodeReadable = createReadStream(currentPath)
    nodeReadable.on('data', (chunk) => {
        console.log(`Print file: ${chunk.toString()}\n`)
    });
    nodeReadable.on('error', () => {
        console.log('Operation failed');
    });
};

