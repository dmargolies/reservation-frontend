const date = new Date();
const uniqueId = () => String(Math.random());

date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
date.setDate(date.getDate() + 1); // start schedule on tomorrow
const schedule = [];
// schedule 14 days
for (let i = 0; i < 14; i++) {
  for (let hour = 8;hour <= 17; hour++) {
    date.setHours(hour);
    date.setMinutes(0);
    schedule.push({ start: date.toISOString(), id: uniqueId() });
    date.setMinutes(15);
    schedule.push({ start: date.toISOString(), id: uniqueId() });
    date.setMinutes(30);
    schedule.push({ start: date.toISOString(), id: uniqueId() });
    date.setMinutes(45);
    schedule.push({ start: date.toISOString(), id: uniqueId() });
  }
  date.setDate(date.getDate() + 1);
}

export { schedule };
