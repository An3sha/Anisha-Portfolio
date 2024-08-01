import "./index.css";
import "./Styles/Experience.css";
import Header from "./Header";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <div id="root">
      <div className="root">
        <Header />
        <Box className="content">
          <Card className="card-glass"
            sx={{
              // Remove MUI inline styling if using CSS classes for styles
              // background: "rgba(255, 255, 255, 0.1)",
              // border: "1px solid rgba(255, 255, 255, 0.35)",
              // borderRadius: "15px",
              // backdropFilter: "blur(5px)",
              // padding: "20px",
              // boxShadow: "0 0 0.5em rgba(117, 115, 115, 0.5)",
              // margin: "30px",
              // display: "flex",
              // flexDirection: "column",
            }}
          >
            <CardContent>
              <Box marginBottom="30px">
                <Grid
                  container
                  justifyContent="space-between"
                  color="rgb(237, 216, 119)"
                >
                  <Typography fontSize="20px" fontWeight="500">
                    Ernest
                  </Typography>
                  <Typography fontSize="16px" fontWeight="400">
                    New York, United States (Remote)
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  marginTop="10px"
                  color="rgb(237, 216, 119)"
                >
                  <Typography
                    fontSize="16px"
                    fontWeight="400"
                    fontStyle="italic"
                  >
                    Frontend Developer
                  </Typography>
                  <Typography
                    fontSize="16px"
                    fontWeight="400"
                    fontStyle="italic"
                  >
                    February 2024 - Present
                  </Typography>
                </Grid>
                <FadeInSection>
                  <Grid
                    container
                    direction="column"
                    marginTop="20px"
                    gap="10px"
                    color='rgb(205, 205, 205)'
                  >
                    <Typography>
                      ◦ Design System Development: Contributed to the
                      development and maintenance of a comprehensive design
                      system, ensuring consistent and high-quality user
                      interface design across all products.
                    </Typography>
                    <Typography>
                      ◦ Performance Optimization: Implemented React-Query to
                      optimize network calls, significantly enhancing the
                      modularity and performance of applications.
                    </Typography>
                    <Typography>
                      ◦ Feature Development: Added features such as a customized
                      accordion and file uploader, enabling foremen to view,
                      add, filter, and search data effectively.
                    </Typography>
                    <Typography>
                      ◦ Status Management: Developed a custom status selector
                      for the design system to streamline status updates.
                    </Typography>
                    <Typography>
                      ◦ Custom Components: Built a custom, high-performance data
                      grid component to efficiently handle extensive updates.
                    </Typography>
                    <Typography>
                      ◦ PDF Generation: Generated PDFs for invoices and
                      summaries, improving document management.
                    </Typography>
                  </Grid>
                </FadeInSection>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
}
