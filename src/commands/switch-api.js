import printHelp from '../lib/print-help.js';
import * as functionApi from './modules-api.js'

export const switchAPI = async (dirname, params) => {
    
    switch (params[0]) {

        case 'help':
            printHelp()            
            break

            case 'add':
        await functionApi.add(dirname, params.slice(1).join(' '))        
        
        
        break;

        /* case 'read':
            modulesApi.read()            
            break */
    
        default:                    
          console.log('\x1b[35mInvalid input\n\x1b[0m');                
        break
    }

}

    
