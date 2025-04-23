import path from 'path';
import { promises as fsPromises } from 'fs';

export class ValidationErrorStandart extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export class PropertyRequiredError extends ValidationErrorStandart {
    constructor(property) {
        super(`Missing required property: ${property}`);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

export const list = async (dirname) => {
    try {
        const currentPath = path.resolve(dirname);

        await fsPromises.access(currentPath).catch(() => {
            throw new PropertyRequiredError('FS operation failed: Directory does not exist');
        });

        const files = await fsPromises.readdir(currentPath);

        console.log(files.join('\n'));
    } catch (error) {
        console.error('Operation failed:', error.message);
        throw error;
    }
};
