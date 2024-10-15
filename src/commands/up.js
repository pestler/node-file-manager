import path from 'path';

export function  up (dirname){    
    const parentDir = path.dirname(dirname);
    if (parentDir !== dirname) {
        return parentDir;
    }
}

