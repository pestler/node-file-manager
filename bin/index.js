import process from 'node:process';
import readline from 'readline';
import { switchAPI } from '../src/commands/switch-api.js';
import os from 'os';


let username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1]
    || (process.argv.includes('--username') ? process.argv[process.argv.indexOf('--username') + 1] : 'user');


export let dirname = os.homedir();

const startCLI = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline.createInterface({ input, output });

    console.log(`Welcome to the File Manager, ${username}!\n`);
    console.log(`You are currently in ${dirname}\n`);

    rl.on('SIGINT', () => {
        console.log(`\nThank you for using File Manager, ${username}!`);
        rl.close();
    });


    rl.on('line', async (input) => {
        const [command, ...params] = input.toString().trim().split(' ');

        if (command === '.exit') {
            console.log(`Thank you for using File Manager, ${username}!`);
            rl.close();
        } else {
            try {
                await switchAPI(command, params);
            } catch (error) {
                console.error('Operation failed:', error.message);
            }
        }
    });
};

export default startCLI;
