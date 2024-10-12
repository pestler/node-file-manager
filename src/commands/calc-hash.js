import path from 'path';
import { createReadStream } from 'fs';
import crypto from 'crypto';
import { output } from '../lib/output.js';


const getHashValue = path => new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const readStream = createReadStream(path);
    readStream.on('error', reject);
    readStream.on('data', chunk => hash.update(chunk));
    readStream.on('end', () => resolve(hash.digest('hex')));
})

export const calculateHash = async (dirname, filename) => {
    const filePath = path.resolve(dirname, filename);
    (async () => {
        try {
            const hash = await getHashValue(filePath);
            console.log(
                output('green', hash)                
            );
        } catch (error) {
            console.error(
                output('red','Operation failed', error)                
            );
        }
    })();
};

