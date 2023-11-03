import { forwardRef } from "react";

import NextLink from "next/link";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
export default function Home() {
  return (
    <main>
      <Box display="flex" flexDirection="column">
        <NextLink component={Link} href="/provider">Provider</NextLink>
        <NextLink component={Link} href="/client">Client</NextLink>
      </Box>
    </main>
  );
}
