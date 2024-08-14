import React from "react";
import { Button } from "@mui/material";

interface SettingsProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Settings: React.FC<SettingsProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Theme
      </Button>
    </div>
  );
};

export default Settings;
