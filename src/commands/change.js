
import process from 'node:process';


export function changeDir (dirName){
    process.chdir(dirName);    
    return dirName;
};