import NextLink from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AvailabilityForm from "./AvailabilityForm";

export default function Page() {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Typography sx={{ px: 1 }} variant="h2">Add Availability</Typography>
        <Button variant="contained" LinkComponent={NextLink} href="/provider">Back</Button>
      </Box>
      <AvailabilityForm />
    </Box>
  );
}
