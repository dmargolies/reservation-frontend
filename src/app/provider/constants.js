const date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
date.setDate(date.getDate() + 1); // start schedule on tomorrow
const schedule = [];
// schedule 14 days
for (let i = 0; i < 14; i++) {
  date.setHours(8);
  const morningStart = date.toISOString();
  date.setHours(12);
  const morningEnd = date.toISOString();
  date.setHours(13);
  const afternoonStart = date.toISOString();
  date.setHours(17);
  const afternoonEnd = date.toISOString();
  schedule.push({
    start: morningStart,
    end: morningEnd
  });
  schedule.push({
    start: afternoonStart,
    end: afternoonEnd,
  });

  date.setDate(date.getDate() + 1);
}

export { schedule };
