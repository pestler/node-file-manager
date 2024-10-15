import process from 'node:process';
import readline from 'readline';
import { switchAPI } from '../src/commands/switch-api.js';

let username = 'user'

const startCLI = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline.createInterface({ input, output });
    
    process.stdout.write(`Welcome to the File Manager, ${username}!\n`);    
        
    rl.on('line', async (input) => {          
        const [command, ...params] = input.toString().trim().split(' ');
        if (input === '.exit') {
            process.stdout.write(`Thank you for using File Manager, ${username}!`);  
            rl.close();          
        } else {                                    
            await switchAPI(command, params);            
        }
    })                    
};

export default startCLI;

