import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface Company {
  name: string;
  location: string;
  role: string;
  date: string;
  workContent: string[];
}

interface StepperProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  companies: Company[];
}


const Stepper: React.FC<StepperProps> = ({
  activeStep,
  handleNext,
  handleBack,
  companies,
}) => {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="dots"
      steps={companies.length}
      position="static"
      activeStep={activeStep}
      sx={{
        marginTop: "60px",
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: 0,
        "& .MuiMobileStepper-dots": {
          "& .MuiMobileStepper-dot": {
            backgroundColor: "rgba(126, 123, 123, 0.5)",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        },
        "& .MuiMobileStepper-dot": {
          width: 8,
          height: 8,
        },
        "& .MuiMobileStepper-dotActive": {
          width: 10,
          height: 10,
        },
        "& .MuiButton-root": {
          textTransform: "none",
            fontSize: "14px",
        },
      }}
      nextButton={
        <Button
          size="small"
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
          onClick={handleNext}
          disabled={activeStep === companies.length - 1}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};

export default Stepper;
