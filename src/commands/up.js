import path from 'path';
import process from 'node:process';

export function up() {
    const upDirPath = path.resolve("..");
    process.chdir(upDirPath);

    return upDirPath;
};