import { mkdir } from 'fs/promises';

export const createDirectory = async (dir) => {
    try {
        await mkdir(dir);
    } catch (error) {
        throw error;
    }
};
