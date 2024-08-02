import { Box, Typography} from "@mui/material";
import Header from './Header';
import FadeInSection from "./FadeInSection";

export default function Projects() {
   return (
    <div id="root">
      <div className="root">
        <Header />
         <Box className="content">
           <FadeInSection>
              <Typography color='darkgray' textAlign='center' marginTop={35}>
             Coming soon...
           </Typography>
           </FadeInSection>
          
         
        </Box>
      </div>
    </div>
  );
}
