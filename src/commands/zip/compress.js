import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
//import path from 'path';


export const compress = async (dirname, filename) => {
    const pathAll = filename.split(' ');

    const [inputPath, outputPath] = pathAll
    /* console.log(typeof(pathToFile));
    console.log(pathToDestination); */
    
    return await new Promise((resolve, reject) => {
        const input = createReadStream(inputPath);
        const output = createWriteStream(outputPath);
        const brot = createBrotliCompress();

        input.on('error', (error) => reject(error));

        const stream = input.pipe(brot).pipe(output);
        stream.on('finish', () => resolve('File compressed!'));
        stream.on('error', (error) => reject(error));
    });
};


