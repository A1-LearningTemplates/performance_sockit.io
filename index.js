const os = require("os");

const osType = os.type();
const upTime = os.uptime();
const freeMem = os.freemem();
const totalMem = os.totalmem();
const cpus = os.cpus();

const usedMem = totalMem - freeMem;
const memUseage = Math.floor((usedMem / totalMem) * 100) / 100;

// console.log(osType);
// console.log(upTime);
// console.log(freeMem);
// console.log(totalMem);
// console.log(usedMem);
// console.log(memUseage);
// console.log(cpus);

const avgOfCpu = () => {
  let idleMe = 0;
  let totalMs = 0;
  cpus.forEach((core) => {
    for (const type in core.times) {
      totalMs += core.times[type];
    }
    idleMe += core.times.idle;
  });

  return {
    idle: idleMe / cpus.length,
    total: totalMs / cpus.length,
  };
};
avgOfCpu();
console.log(avgOfCpu());
