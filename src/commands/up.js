import path from 'path';
import process from 'node:process';

export function up(dirname) {
    const upDirPath = path.resolve(dirname,"..");
    process.chdir(upDirPath);

    return upDirPath;
};