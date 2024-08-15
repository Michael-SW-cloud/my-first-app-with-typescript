import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Home from "./Home";
import Settings from "./Settings";
import {
  Drawer,
  Box,
  IconButton,
  MenuItem,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { TfiAlignJustify } from "react-icons/tfi";
import { homeContainer, textStyleColor } from "../style";





const MuiDrawer: React.FC = () => {
  const [isDrwaerOpen, setIsDrwerOpen] = useState(false);


  return (
    <Container sx={homeContainer}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrwerOpen(true)}
      >
        <TfiAlignJustify />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrwaerOpen}
        onClose={() => setIsDrwerOpen(false)}
      >
        <Container
          
          
        >
          <Container sx={textStyleColor}>
            <Link to="/">Dashboard</Link>
          </Container>
          <Container sx={textStyleColor}>
            <Link to="/Setting">Settings</Link>
          </Container>
        </Container>
      </Drawer>
    </Container>
  );
};

export default MuiDrawer;
