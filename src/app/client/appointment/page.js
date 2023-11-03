"use client"

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { schedule } from "./constants";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ScheduleCard = ({ children }) => {
  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Box display="flex" flexDirection="column">
        {children}
      </Box>
    </Card>
  );
}

const DateHeader = ({ date }) => {
  return (
    <Typography variant="h5">
      {date}
    </Typography>
  );
};
const ScheduleItem = ({ start, onSchedule }) => {
  return (
    <Button sx={{ my: 1}} variant="contained" onClick={onSchedule}>
      <Typography variant="h5">
        {start}
      </Typography>
    </Button>
  );
}

export default function Page() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const handleSnackbarClose = () => {
    // little hacky UX for now, but send them to confirm page after showing success message
    router.push("/client");
  };

  const handleSchedule = () => {
    // TODO make backend request
    // on success
    setSuccess(true);
  };
  const scheduleItems = useMemo(() => {
    let prevHeader = new Date(schedule[0]?.start).toDateString();
    let dayItems = [];
    const items = [];

    schedule.forEach(({ start, id }) => {
      const startDate = new Date(start);
      const curHeader = startDate.toDateString();
      if (curHeader !== prevHeader) {
        items.push(
          <ScheduleCard key={prevHeader}>
            <DateHeader date={prevHeader} />
            {dayItems}
          </ScheduleCard>
        );
        dayItems= [];
        prevHeader = curHeader;
      }

      dayItems.push(
        <ScheduleItem
          onSchedule={() => handleSchedule(id)}
          key={startDate.toLocaleTimeString()}
          start={startDate.toLocaleTimeString()} />
      );
    });

    if (dayItems.length !== 0) {
      items.push(
        <ScheduleCard key={prevHeader} >
          <DateHeader date={prevHeader} />
          {dayItems}
        </ScheduleCard>
      );
    }

    return items;
  }, []);

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h3">Schedule Appointment</Typography>
        <Typography>All appointments are 15 minutes</Typography>
      </Box>
      {scheduleItems}
      <Snackbar
        autoHideDuration={2000}
        open={success}
        onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          You have successfully created an appointment. Please remember to confirm within 30 minutes.
        </Alert>
      </Snackbar>
    </Box>
  );
}
