import { useMemo } from "react";
import NextLink from "next/link";

import { schedule } from "./constants";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ScheduleCard = (props) => {
  return <Card sx={{ m: 1, p: 1 }} {...props} />;
}

const DateHeader = ({ date }) => {
  return (
    <Typography variant="h5">
      {date}
    </Typography>
  );
};
const ScheduleItem = ({ start, end }) => {
  return (
    <Box display="flex">
      <Typography>{start}</Typography>-
      <Typography>{end}</Typography>
    </Box>
  );
}
export default function Page() {
  const scheduleItems = useMemo(() => {
    let prevHeader = new Date(schedule[0]?.start).toDateString();
    let scheduleItems = [];
    const items = [];

    schedule.forEach(({ start, end }) => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const curHeader = startDate.toDateString();
      if (curHeader !== prevHeader) {
        items.push(
          <ScheduleCard key={prevHeader}>
            <DateHeader date={prevHeader} />
            {scheduleItems}
          </ScheduleCard>
        );
        scheduleItems = [];
        prevHeader = curHeader;
      }
      scheduleItems.push(
        <ScheduleItem
          key={startDate.toLocaleTimeString()}
          start={startDate.toLocaleTimeString()}
          end={endDate.toLocaleTimeString()} />
      );
    });

    if (scheduleItems.length !== 0) {
      items.push(
        <ScheduleCard key={prevHeader} >
          <DateHeader date={prevHeader} />
          {scheduleItems}
        </ScheduleCard>
        );
    }
    return items;
  }, []);

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Typography sx={{ px: 1 }} variant="h2">My Schedule</Typography>
        <Button variant="contained" LinkComponent={NextLink} href="/provider/availability">+ Availability</Button>
      </Box>
        {scheduleItems}
    </Box>
  );
}
