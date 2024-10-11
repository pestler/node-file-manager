import path from 'path';
import fs from 'fs';

const {
    createHash
} = await import('crypto');


export const calculateHash = async (dirname, filename) => {
    const filePath = path.resolve(dirname, filename);
    const buffer = fs.readFileSync(filePath)
    const hash = createHash('sha256').update(buffer).digest('hex')
    console.log(`SHA256 hash: ${hash}`);
};
