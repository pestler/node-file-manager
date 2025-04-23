import process from 'node:process';
import { access } from 'node:fs/promises';

export async function changeDir(dirName) {
    try {
        if (!dirName || typeof dirName !== 'string') {
            throw new Error('Invalid directory name provided.');
        }

        await access(dirName).catch(() => {
            throw new Error('Directory does not exist or access is denied.');
        });

        process.chdir(dirName);
        console.log(`Successfully changed directory to: ${dirName}`);
        return dirName;
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
}
