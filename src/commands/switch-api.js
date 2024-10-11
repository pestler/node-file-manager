import printHelp from '../lib/print-help.js';
import * as modulesApi from './modules-api.js'

export const switchAPI = async (dirname, params) => {
    let currentDir = dirname;
    switch (params[0]) {

        case 'help':            
            printHelp()
            break;

            case 'ls':
            await modulesApi.list(dirname);
            break;

        case 'add':            
            await modulesApi.add(dirname, params.slice(1).join(' '))
            break;

        case 'hash':            
            await modulesApi.calculateHash(dirname, params.slice(1).join(' '));
            break;

        default:
            console.log('\x1b[35mInvalid input\n\x1b[0m');
            break;
    }
    return currentDir
}


