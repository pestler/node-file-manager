import printHelp from '../lib/print-help.js';
import * as modulesApi from './modules-api.js'

export const switchAPI = async (dirname, params) => {
    let currentDir = dirname;
    switch (params[0]) {

        case 'help':
            console.log(params);
            printHelp()
            break;

        case 'add':
            console.log(params, 'switch');
            await modulesApi.add(dirname, params.slice(1).join(' '))
            break;

        case 'hash':
            console.log(params);
            await modulesApi.calculateHash(dirname, params.slice(1).join(' '));
            break;

        /* case 'read':
            modulesApi.read()            
            break */

        default:
            console.log('\x1b[35mInvalid input\n\x1b[0m');
            break;
    }
    return currentDir
}


