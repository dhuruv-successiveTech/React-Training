import * as React from "react";
import { CircularProgress, Stack } from "@mui/material";

export default function CircularSize() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="3rem" />
    </Stack>
  );
}
