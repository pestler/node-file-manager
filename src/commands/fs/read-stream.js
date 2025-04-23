import { resolve } from 'path';
import { createReadStream, promises as fsPromises } from 'fs';

export const readstream = async (dirname, filename) => {
    try {
        const currentPath = resolve(dirname, filename);

        await fsPromises.access(currentPath).catch(() => {
            throw new Error('File not found');
        });

        const nodeReadable = createReadStream(currentPath, { encoding: 'utf-8' });

        nodeReadable.on('data', (chunk) => {
            console.log(`Print file:\n${chunk}`);
        });

        nodeReadable.on('end', () => {
            console.log('File reading completed.');
        });

        nodeReadable.on('error', (err) => {
            console.error('Operation failed:', err.message);
        });
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
};
