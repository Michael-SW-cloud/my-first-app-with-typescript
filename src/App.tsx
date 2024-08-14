import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import Settings from "./components/Settings";
import Home from "./components/Home";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  MenuItem,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrwaerOpen, setIsDrwerOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Settings toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Home isDarkMode={isDarkMode} />
      </Container>
     
    </ThemeProvider>
  );
}

export default App;
