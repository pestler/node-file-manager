import path from 'path';

export const  up = (currentDirname)=>{
    const parentDir = path.dirname(currentDirname);
    if (parentDir !== currentDirname) {
        return parentDir;
    }
}
