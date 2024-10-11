/* import * as modulesApi from  './../commands/modules-api.js' */
import { EOL } from 'os';
import printHelp from '../lib/print-help.js';
import * as functionApi from './modules-api.js'

/* import { addFile } from './fs/add.js'; */

export const switchAPI = (dirname, params) => {
    
    switch (params[0]) {

        case 'help':
            printHelp()            
            break

            case 'add':
        functionApi.add(dirname, params)        
        
        break;

        /* case 'read':
            modulesApi.read()            
            break */
    
        default:        
            console.log('2')
        break
    }

}

    
