import React from "react";
import { Button, Container } from "@mui/material";

interface SettingsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Settings: React.FC<SettingsProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Theme
      </Button>
    </Container>
  );
};

export default Settings;
