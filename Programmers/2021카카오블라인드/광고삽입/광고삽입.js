const timeToSec = (time) => {
  const [hour, minute, second] = time.split(":");
  return parseInt(hour) * 60 * 60 + parseInt(minute) * 60 + parseInt(second);
};

const secToTime = (sec) => {
  let HH = (sec / 3600) >> 0;
  let MM = ((sec / 60) >> 0) % 60;
  let SS = sec % 60;

  HH = HH > 9 ? HH : "0" + HH;
  MM = MM > 9 ? MM : "0" + MM;
  SS = SS > 9 ? SS : "0" + SS;

  return `${HH}:${MM}:${SS}`;
};

const solution = (play_time, adv_time, logs) => {
  const play_sec = timeToSec(play_time);
  const adv_sec = timeToSec(adv_time);

  const stack_time = new Array(play_sec).fill(0);
  logs.forEach((log) => {
    let [start, end] = log.split("-");
    stack_time[timeToSec(start)] += 1;
    stack_time[timeToSec(end)] -= 1;
  });

  for (let i = 0; i < play_sec - 1; i++) {
    stack_time[i + 1] += stack_time[i];
  }

  for (let i = 0; i < play_sec - 1; i++) {
    stack_time[i + 1] += stack_time[i];
  }

  let idx = 0;
  let answer = stack_time[adv_sec - 1];

  for (let i = adv_sec - 1; i < play_sec; i++) {
    if (answer < stack_time[i] - stack_time[i - adv_sec]) {
      answer = stack_time[i] - stack_time[i - adv_sec];
      idx = i - adv_sec + 1;
    }
  }

  return secToTime(idx);
};

const sol = solution("02:03:55", "00:14:15", [
  "01:20:15-01:45:14",
  "00:40:31-01:00:00",
  "00:25:50-00:48:29",
  "01:30:59-01:53:29",
  "01:37:44-02:02:30",
]);
console.log(sol); // 01:30:59
