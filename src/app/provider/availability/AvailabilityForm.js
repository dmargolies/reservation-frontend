"use client"

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function AvailabilityForm() {
  const [date, setDate] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const snackbarOpen = !!snackbarSeverity;

  const handleSubmit = () => {
    if (date && start && end) {
      // TODO actually send to server
      setSnackbarSeverity("success");
      setSnackbarMessage("Your selection has been saved");
      setDate(null);
      setStart(null);
      setEnd(null);
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please make sure all fields have been set");
    }
  };

  const handleSnackbarClose = () => setSnackbarSeverity("");

  return (
    <Box sx={{ p: 1 }}>
      <DatePicker
        value={date}
        onChange={(v) => setDate(v)}
        label="Select date" />
      <Box display="flex">
        <Box>
          <Typography variant="label">Start</Typography>
          <DigitalClock
            value={start}
            onChange={(v) => setStart(v)} />
        </Box>
        <Box>
          <Typography variant="label">End</Typography>
          <DigitalClock
            value={end}
            onChange={(v) => setEnd(v)}
            label="end" />
        </Box>
      </Box>
      <Button onClick={handleSubmit}>Submit</Button>
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
