"use client"

import { useMemo, useState } from "react";
import NextLink from "next/link";

import { appointments as defaultAppointments } from "./constants";

import Icon from "@mui/material/Icon";
import CheckIcon from '@mui/icons-material/Check';
import PriorityHigh from '@mui/icons-material/PriorityHigh';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const AppointmentCard = ({ date, confirmed, expired, id, onConfirm }) => {
  const formattedDate= useMemo(() => new Date(date).toLocaleString(), [date]);
  return (
    <Card sx={{ m: 1, p: 1}}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{mr: 1}}>{formattedDate}</Typography>
        {confirmed && <><CheckIcon color="success" /> Confirmed</>}
        {expired && <PriorityHigh color="warning" />}
        {!confirmed && !expired && (
          <Button
            variant="contained"
            onClick={onConfirm}>
            Confirm
          </Button>
        )}
      </Box>
      {expired && (
        <Typography>
          Your appointment was not confirmed within 30 minutes.
          <NextLink href="/client/appointment">Create a new appointment.</NextLink>
        </Typography>
      )}
    </Card>
  );
};

export default function Page() {
  const [appointments, setAppointments] = useState(defaultAppointments);
  const handleConfirm = (id) => {
    // TODO make BE call, handle error, loading
    setAppointments(prev => prev.map(prevAppt => prevAppt.id === id ? { ...prevAppt, confirmed: true } : prevAppt));
  };
  return(
    <Box>
      <Box display="flex" alignItems="center">
        <Typography sx={{ px: 1 }} variant="h4">My Appointments</Typography>
        <Button variant="contained" LinkComponent={NextLink} href="/client/appointment">New Appointment</Button>
      </Box>
      {appointments.map(({ start, confirmed, expired, id }) => (
        <AppointmentCard
          key={id}
          confirmed={confirmed}
          date={start}
          expired={expired}
          onConfirm={() => handleConfirm(id)} />))}
    </Box>
  );
};
