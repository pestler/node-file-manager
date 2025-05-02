import { join, resolve, basename } from 'path';
import { promises as fsPromises } from 'fs';

const sanitizePath = (pathString) => pathString.replace(/\\$/, '');

export const move = async (dirname, path_to_file, path_to_new_directory) => {
    try {
        dirname = sanitizePath(dirname);
        const currentPath = resolve(dirname, path_to_file);
        const fileName = basename(currentPath);
        const targetPath = resolve(dirname, path_to_new_directory);
        const targetPathFile = join(targetPath, fileName);

        try {
            await fsPromises.access(currentPath);
        } catch {
            throw new Error(`Source file not found: ${currentPath}`);
        }

        try {
            await fsPromises.access(targetPath);
        } catch {
            console.log(`Operation failed. Target directory "${targetPath}" does not exist.`);
        }

        try {
            await fsPromises.access(targetPathFile);
            throw new Error(`Operation failed. File "${fileName}" already exists in "${targetPath}"`);
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }

        try {
            await fsPromises.rename(currentPath, targetPathFile);
            console.log(`File "${fileName}" successfully moved to "${targetPath}"`);
        } catch (error) {
            if (error.code === 'EPERM') {
                console.error(`Operation failed. Permission denied: Cannot move to "${targetPath}". Try running the script as Administrator.`);
                return;
            }
            throw error;
        }
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
};
