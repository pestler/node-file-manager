import os from 'os';

export const systemInfo = async (params) => {
    try {
        if (!params || params.length < 1) throw new Error('Invalid input');

        const param = params.toString().replace('--', '');
        const CPUS = os.cpus();

        const totalCpu = `Total numbers of CPUs: ${CPUS.length}`;
        const infoCpu = CPUS.map((el, ind) => ({
            'CPU Number': ind + 1,
            'Model': el.model,
            'Speed (GHz)': (el.speed / 1000).toFixed(2),
        }));

        const osInfoArray = {
            homedir: `Home Directory: ${os.homedir()}`,
            username: `Username: ${os.userInfo().username}`,
            architecture: `Architecture: ${os.arch()}`,
            EOL: `End-of-Line Sequence: ${JSON.stringify(os.EOL)}`,
            cpus: {
                totalCpu,
                infoCpu,
            },
        };


        if (!osInfoArray[param]) {
            throw new Error('Invalid parameter provided. Available options: homedir, username, architecture, EOL, cpus');
        }


        if (param === 'cpus') {
            console.log(totalCpu);
            console.table(infoCpu);
        } else {
            console.log(osInfoArray[param]);
        }
    } catch (error) {
        console.error(error.message);
    }
};
