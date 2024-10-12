import printHelp from '../lib/print-help.js';
import * as modulesApi from './modules-api.js'

export const switchAPI = async (dirname, params) => {
    let currentDir = dirname;
    const paramsOne = params.slice(1).join(' ')
    switch (params[0]) {

        case 'help':            
            printHelp()
            break;

            case 'ls':
            await modulesApi.list(dirname);
            break;

            case 'cat':
                await modulesApi.readstream(dirname, paramsOne)
            break;

        case 'add':            
            await modulesApi.add(dirname, paramsOne)
            break;

        case 'hash':            
            await modulesApi.calculateHash(dirname, paramsOne);
            break;

            case 'os':            
            await modulesApi.systemInfo( paramsOne);
            break;

        default:
            console.log('\x1b[35mInvalid input\n\x1b[0m');
            break;
    }
    return currentDir
}


