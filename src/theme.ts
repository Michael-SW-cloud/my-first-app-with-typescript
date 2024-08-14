import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#56C5E5",
    },
    secondary: {
      main: "#0A191D",
      contrastText: "#47008F",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0A191D",
    },
    secondary: {
      main: "#56C5E5",
      contrastText: "#56C5E5",
    },
  },
});
