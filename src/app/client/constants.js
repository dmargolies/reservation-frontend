// mock appointments in all states
// 1) confirmed
// 2) unconfirmed
// 3) expired

const date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
date.setDate(date.getDate() + 1); // start schedule on tomorrow

const appointments = [];
date.setHours(10);

const confirmed = {
  confirmed: true,
  start: date.toISOString(),
  id: "1",
};

date.setDate(date.getDate() + 2);
const unconfirmed = {
  confirmed: false,
  start: date.toISOString(),
  id: "2",
};

date.setDate(date.getDate() + 1);
const expired = {
  confirmed: false,
  expired: true, // BE would control this
  start: date.toISOString(),
  id: "3",
};

appointments.push(confirmed);
appointments.push(unconfirmed);
appointments.push(expired);

export { appointments }
