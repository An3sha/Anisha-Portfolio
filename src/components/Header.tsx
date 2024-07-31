import { Box, Typography } from "@mui/material";
import "./index.css";

export default function Header() {
  return (
    <Box className="header">
      <Typography color="white" marginTop="20px">Home</Typography>
      <Typography color="white" marginTop="20px">Project</Typography>
      <Typography color="white" marginTop="20px">Social</Typography>
    </Box>
  );
}
