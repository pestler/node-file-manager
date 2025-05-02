import fs from 'fs/promises';
import path from 'path';

export const mkdir = async (currentDir, dirName) => {
    try {
        const fullPath = path.join(currentDir, dirName);
        await fs.mkdir(fullPath, { recursive: true });
        console.log(`Directory "${dirName}" created successfully at: ${fullPath}`);
    } catch (error) {
        console.error(`Operation failed. Failed to create directory: ${error.message}`);
    }
};
