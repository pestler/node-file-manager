import path from 'path'
import { createReadStream } from 'fs';


export const readstream = async (dirname, filename) => {
    const currentPath = path.resolve(dirname, filename);
    const streamRead = createReadStream(currentPath)    
    streamRead.on('data', (chunk) => {
/*         console.log(chunk.toString())         */
        console.log(`\n\x1b[36mPrint file: \x1b[4m\x1b[33m${chunk.toString()}\n\x1b[0m`)
    });
};

