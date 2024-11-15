import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
    typography: {
        fontFamily: ["Jost", "serif"],
        h1: {
            fontWeight: 800,
            fontSize: "70px",
            color: `${colors.primary}`,
        },
        h2: {
            fontWeight: 800,
            fontSize: "50px",
            color: `${colors.primary}`,
        },
        h3:{
            fontWeight: 800,
            fontSize: "40px",
            color: `${colors.primary}`,
        },
        h4: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            color: `${colors.m3syslightonbackground}`,
        },
        h5: {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "165%",
            color: `${colors.primary}`,
            transition: "0,4s",
            '&:hover': {
                color: `${colors.secondary}`,
            }
        },
        h6: {
            fontWeight: 600,
            fontSize: "18px",
            color: `${colors.primary}`,
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "165%",
            color: `${colors.text}`,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 1200,
            lg: 1336,
            xl: 1648,
        }
    }
})