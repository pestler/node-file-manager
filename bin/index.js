import process from 'node:process';
import readline from 'readline';
import { switchAPI } from '../src/commands/switch-api.js';
import os from 'os';

let username = 'user'

const startCLI = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline.createInterface({ input, output });
    
    console.log(`Welcome to the File Manager, ${username}!\n`);    
    console.log(`You are currently in ${os.homedir()};                       }\n`);  

    rl.on('SIGINT', () => {
        console.log(`Thank you for using File Manager, ${username}!`);  
        process.exit(0);
        rl.close();          
    });
     
    rl.on('line', async (input) => {          
        const [command, ...params] = input.toString().trim().split(' ');
        if (input === '.exit') {
            console.log(`Thank you for using File Manager, ${username}!`);  
            rl.close();          
        } else {                                    
            await switchAPI(command, params);            
        }
    })                    
};
export default startCLI;

