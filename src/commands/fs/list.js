import path from 'path';
import { promises as fsPromises } from 'fs';

export class ValidationErrorStandart extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class PropertyRequiredError extends ValidationErrorStandart {
    constructor(property) {
        super(`Missing required property: ${property}`);
        this.name = 'PropertyRequiredError';
        this.property = property;
    }
}

export const list = async (dirname) => {
    try {
        const currentPath = path.resolve(dirname);
        await fsPromises.access(currentPath);

        const files = await fsPromises.readdir(currentPath);

        const directories = [];
        const regularFiles = [];

        for (const file of files) {
            const filePath = path.join(currentPath, file);

            try {
                const stats = await fsPromises.stat(filePath);
                if (stats.isDirectory()) {
                    directories.push(file);
                } else {
                    regularFiles.push(file);
                }
            } catch (error) {
                console.warn(`Skipping inaccessible file: ${file}`);
            }
        }

        console.log(directories.join('\n'));
        console.log(regularFiles.join('\n'));
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};

