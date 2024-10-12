import os from 'os';

export const systemInfo = async (params) => {
    try {
        if (params.trim().length < 1) throw Error('Invalid input');
        const param = params.trim().replace('--', '')
        const CPUS = os.cpus()
        const totalCpu = `Total number of CPUs: ${CPUS.length}`;
        const infoCpu = []
        CPUS.forEach(
            (el, ind) => {
                infoCpu.push(`Number__CPU ${ind+1}`)
                infoCpu.push(`MODEL: ${el.model}`)
                infoCpu.push(`SPEED ${el.speed / 1000} GHz}`,)
            }
        )

        const osInfoArray = {
            homedir: `homedir: ${os.homedir()}`,
            username: `username: ${os.userInfo().username} ` ,
            architecture: `architecture: ${os.arch()}` ,
            EOL: `EOL: ${JSON.stringify(os.EOL)}`,
            cpus: {
                totalCpu: totalCpu,
                infoCpu: infoCpu
            }
        }
        console.log(osInfoArray[param]);
        
    } catch (error) {
        console.log(error.message)
    }
}
