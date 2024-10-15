import { isAbsolute, join } from 'path';
import { access, stat } from 'fs';

export const changeDir= async (dirname, dir)=>{
    const newPath = isAbsolute(dir) ? dir : join(dirname, dir);
    
    try {
        access(newPath);
        const stats = stat(newPath);

        if (stats.isDirectory()) {
            return newPath;
        } else {
            console.log('Invalid input');
        }
    } catch (error) {
        console.log('Invalid input', error);
    }
}
