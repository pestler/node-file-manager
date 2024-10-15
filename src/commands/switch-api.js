import printHelp from '../lib/print-help.js';
import * as modulesApi from './modules-api.js'
import os from 'os';

export let dirname = os.homedir();                       

export const switchAPI = async (command, params) => {
    
    switch (command) {

        case 'help':
            printHelp()
            break;

            case 'up':
                { const parentDir = modulesApi.up(dirname);
                if (parentDir) dirname = parentDir;
                break; }

            case 'cd':
                dirname = modulesApi.changeDir(...params); 
                break; 

        case 'ls':
            await modulesApi.list(dirname);
            break;

        case 'cat':
            await modulesApi.readstream(dirname, params[0])
            break;

        case 'add':
            await modulesApi.add(dirname, params[0])
            break;

        case 'cp':
            await modulesApi.copy(dirname, params[0], params[1])
            break;

        case 'mv':
            await modulesApi.mv(dirname, params[0], params[1])
            break;

        case 'rm':
            await modulesApi.deleteFile(dirname, params[0])
            break;

        case 'rn':
            await modulesApi.renameFile(dirname, params[0], params[1])
            break;
        
        case 'hash':
            await modulesApi.calculateHash(dirname, params[0]);
            break;

        case 'os':
            await modulesApi.systemInfo(params);
            break;

        case 'compress':
            await modulesApi.compress(dirname, params[0], params[1]);
            break;

        case 'decompress':
            await modulesApi.decompress(dirname,params[0], params[1]);
            break;

        default:
            console.log('\x1b[35mInvalid input\n\x1b[0m');
            break;
    } 
    console.log(`You are currently in ${dirname}\n`);  
}


