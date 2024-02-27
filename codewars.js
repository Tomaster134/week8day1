// 1. Human Readable Time

function humanReadable(seconds) {
  if (seconds == 0) {
    return "00:00:00";
  }
  let hour = String(Math.floor(seconds / 3600));
  if (hour.length == 1) {
    hour = "0" + hour;
  }
  let minute = String(Math.floor((seconds % 3600) / 60));
  if (minute.length == 1) {
    minute = "0" + minute;
  }
  let second = String(((seconds % 3600) % 60) % 60);
  if (second.length == 1) {
    second = "0" + second;
  }
  return `${hour}:${minute}:${second}`;
}

// 2.