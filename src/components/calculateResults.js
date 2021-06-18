const mostLaps = (runners) => {
  let lapCounts = [];
  runners.map(function (runner) {
    lapCounts.push(runner.lapCount);
  });
  return Math.max(...lapCounts);
};

const bestLap = (runners) => {
  runners.forEach((runner) => {
    console.log(runner.name, Math.min(...runner.lapTimes));
  });
};

export { mostLaps, bestLap };
