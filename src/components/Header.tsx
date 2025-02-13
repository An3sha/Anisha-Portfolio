import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Add useLocation
import "./index.css";

export default function Header() {
  const location = useLocation(); // Get current location

  return (
    <Box className="header">
      <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
        <Typography color="white" marginTop="20px">
          Home
        </Typography>
      </Link>
      <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
        <Typography color="white" marginTop="20px">
          About
        </Typography>
      </Link>
      <Link to="/experience" className={location.pathname === "/experience" ? "active-link" : ""}>
        <Typography color="white" marginTop="20px">
          Experience
        </Typography>
      </Link>
      <Link to="/project" className={location.pathname === "/project" ? "active-link" : ""}>
        <Typography color="white" marginTop="20px">
          Project
        </Typography>
      </Link>
      {/* <Link to="/social" style={{ textDecoration: 'underline' }}> */}
        {/* <Typography color="white" marginTop="20px"> */}
          {/* Social */}
        {/* </Typography> */}
      {/* </Link> */}
    </Box>
  );
}
