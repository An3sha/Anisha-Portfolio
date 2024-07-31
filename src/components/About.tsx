import "./index.css";
import Header from "./Header";
import { Box } from "@mui/material";
import united from "../assests/united.jpg"

export default function About() {
  return (
      <div>
          <img src={united} alt="United" className="united" />
  
      
            <Header />
        <Box className="content">
          
        </Box>

    </div>
  );
}
