import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import Settings from "./components/Settings";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MuiDrawer from "./components/MuiDrwer";


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const theme = isDarkMode ? darkTheme : lightTheme;
 

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MuiDrawer  />

        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />

          <Route
            path="/Setting"
            element={
              <Settings toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
