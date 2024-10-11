import { env, cwd, chdir } from 'node:process';
import process from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, sep, parse, isAbsolute, join } from 'path';
import { EOL } from 'os';


const getDirmame = (metaUrl) => dirname(fileURLToPath(metaUrl));

const getHomedir = () => env.HOME || env.USERPROFILE;

const getParentPath = (filename) => dirname(filename).split(sep).pop();

const getBasePath = (filename) => parse(filename).root;

const getPath = (path) => (isAbsolute(path) ? path : join(cwd(), path));

const createStartPath = () => {
    env.userpath = env.HOME || env.USERPROFILE;
    process.chdir(env.userpath);
};

const up = () => {
    if (getBasePath(cwd()) === cwd()) {
        console.log(`WARNING: You are in root directory ${EOL}`);
    } else {
        chdir('../');
    }
};

export { getDirmame, getHomedir, getParentPath, getBasePath, getPath, createStartPath, up }