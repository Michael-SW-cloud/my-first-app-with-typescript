import React from "react";
import { Button, Container } from "@mui/material";
import { homeContainer } from "../style";

interface SettingsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Settings: React.FC<SettingsProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container sx={homeContainer}>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Theme
      </Button>
    </Container>
  );
};

export default Settings;
