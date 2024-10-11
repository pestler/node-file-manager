import { createInterface } from "readline";
import process from 'node:process';

import { argv, env } from 'node:process';
import { stdout } from 'node:process';
import { EOL } from 'os';

/* import { sendByeText } from '../utils/textForUser.js'; */
import { getHomedir } from "../src/services/path.js";

export const getName = () => {
    const rootDir = getHomedir
    const args = argv.slice(2);

    if (args.length && args[0].startsWith('--')) {
        const username = args[0].slice(2);
        const splitUsername = username.split('=');
                             
        if (splitUsername[0] === 'username') {
            env.username = splitUsername[1];
            stdout.write(
                `Welcome to the File Manager, ${splitUsername[1]}!${EOL}${EOL}`
            );
            stdout.write(`If you need help, you can call command: help${EOL}${EOL}`);
            stdout.write(`You are currently in ${rootDir}${EOL}${EOL}`);
            stdout.write(`Please, print commands and wait for results:${EOL}${EOL}`);
        }
    }
};

export const finishWork = () => {
    /* sendByeText(env.username); */
    process.exit();
};

export const onStop = () => {
    process.on('SIGINT', () => {
      /*   sendByeText(env.username); */
        process.exit();
    });
};
