import process from 'node:process';
import { access } from 'node:fs/promises';
import path from 'path';

export async function changeDir(dirName) {
    try {
        if (!dirName || typeof dirName !== 'string') {
            throw new Error('Invalid input, directory name provided.');
        }

        if (/^[a-zA-Z]:$/.test(dirName)) {
            process.chdir(dirName + '\\');
            console.log(`Successfully changed directory to: ${process.cwd()}`);
            return process.cwd();
        }

        const resolvedPath = path.resolve(dirName);
        await access(resolvedPath);

        process.chdir(resolvedPath);
        console.log(`Successfully changed directory to: ${process.cwd()}`);

        return process.cwd();
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
}
