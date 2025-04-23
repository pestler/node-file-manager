import path from 'path';
import { createReadStream } from 'fs';
import crypto from 'crypto';

const getHashValue = (filePath) => new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        resolve(hash.digest('hex'));
    });

    readStream.on('error', (error) => {
        readStream.destroy();
        reject(error);
    });
});

export const calculateHash = async (dirname, filename) => {
    try {
        const filePath = path.resolve(dirname, filename);

        const hash = await getHashValue(filePath);
        console.log(hash);
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
};
