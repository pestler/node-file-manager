import path from 'path';
import process from 'node:process';

export function up(dirname) {
    try {
        const upDirPath = path.resolve(dirname, "..");


        if (dirname === upDirPath) {
            console.log('You are already at the root directory.');
            return dirname;
        }


        process.chdir(upDirPath);
        console.log(`Moved up to: ${upDirPath}`);
        return upDirPath;
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
