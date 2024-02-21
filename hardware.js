const os = require('os');

const serverMachine = () => os.machine();
const osVersion = () => os.version();
const osUptime = () => os.uptime();
const userName = () => os.userInfo().username;
const osType = () => os.type();
const osPlatform = () => os.platform();
/* longhand
const serverCpus = () => os.cpus().map((cpu, index) => {
  return {
    index: index,
    model: cpu.model,
    speed: cpu.speed,
    times: cpu.times.map(time => {
      return {
        user: time.user,
        nice: time.nice,
        sys: time.sys,
        idle: time.idle,
        irq: time.irq
      };
    })
  };
});
*/

// shorthand
const serverCpus = () => os.cpus().map((cpu, index) => ({
    index: index,
    model: cpu.model,
    speed: cpu.speed,
    times: cpu.times.map(time => ({
        user: time.user,
        nice: time.nice,
        sys: time.sys,
        idle: time.idle,
        irq: time.irq
    }))
}));

module.exports = {
 serverMachine,
 osVersion,
 osUptime,
 userName,
 osType,
 osPlatform,
 serverCpus
};
