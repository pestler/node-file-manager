import process from 'node:process';
import os from 'os';
import readline from 'readline';
import { switchAPI } from '../src/commands/switch-api.js';

let username = 'user'

const startCLI = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline.createInterface({ input, output });
    
    let dirname = os.homedir();    
    
    process.stdout.write(`Welcome to the File Manager, ${username}!\n`);
    process.stdout.write(`You are currently in ${dirname}\n`);
        
    rl.on('line', async (input) => {          
        const [command, ...params] = input.toString().trim().split(' ');
        if (input === '.exit') {
            process.stdout.write(`Thank you for using File Manager, ${username}!`);  
            rl.close();          
        } else {                                    
            await switchAPI(command, params);                         
            process.stdout.write(`You are currently in ${dirname}\n`);                     
        }
    })                    
};

export default startCLI;

