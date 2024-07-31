import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import "./index.css";

export default function Header() {
  return (
    <Box className="header">
      <Link to="/" style={{ textDecoration: 'underline' }}>
        <Typography color="white" marginTop="20px">
          Home
        </Typography>
      </Link>
      <Link to="/about" style={{ textDecoration: 'underline' }}>
        <Typography color="white" marginTop="20px">
          About
        </Typography>
      </Link>
      <Link to="/experience" style={{ textDecoration: 'underline' }}>
        <Typography color="white" marginTop="20px">
          Experience
        </Typography>
      </Link>
      <Link to="/project" style={{ textDecoration: 'underline' }}>
        <Typography color="white" marginTop="20px">
          Project
        </Typography>
      </Link>
      <Link to="/social" style={{ textDecoration: 'underline' }}>
        <Typography color="white" marginTop="20px">
          Social
        </Typography>
      </Link>
    </Box>
  );
}
