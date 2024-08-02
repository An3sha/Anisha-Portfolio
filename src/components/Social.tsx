import { Box, Typography} from "@mui/material";
import Header from './Header';
import FadeInSection from "./FadeInSection";

export default function Social() {
   return (
    <div id="root">
      <div className="root">
        <Header />
         <Box className="content">
           <FadeInSection>
              <Typography color='darkgray'>
             Coming soon...
           </Typography>
           </FadeInSection>
          
         
        </Box>
      </div>
    </div>
  );
}
