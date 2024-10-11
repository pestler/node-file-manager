/* import { stat, writeFile } from 'fs';
import { PropertyRequiredError } from '../util/validation-error.js'
 */
/* const callbackError = (err) => {
    if (err) throw err;
} */

export const add = async (dirname, filename) => {
    console.log(dirname, filename, 555);

   /*  stat(pathFile, (error) => {
        if (error == null) {
            throw new PropertyRequiredError('FS operation failed');
        } else if (error.code === 'ENOENT') {
            writeFile(pathFile, '', 'utf8', callbackError);
        } else {
            console.log('File has been created')
        }
    }) */
};

