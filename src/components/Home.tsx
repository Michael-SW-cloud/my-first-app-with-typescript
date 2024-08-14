// src/Home.tsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { homeContainer } from "../style";
import Button from "./Button"
import TextField from "./TextField"
import { useState } from "react";

import axios from "axios";


interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {

     const [showText, setshowText] = useState("");
     const URL = "https://hello-world.debug.citscloud.de/";
     const handelClick = () => {
       axios.get(URL).then((response) => setshowText(response.data));
     };



  return (
    <Container sx={homeContainer}>
      <Box display="flex" sx={{ border: "2px solid grey" }}>
        <Container className="logo">
          <img
            src="https://consider-it.de/wp-content/uploads/2024/06/CIT-horizontal-V1-20240221.svg"
            alt="Logo"
          />
        </Container>

        <Container className="demo-text">
          <Typography variant="body1">Demo-text</Typography>
        </Container>
      </Box>
      <Box>
        <Container>
            <TextField props={showText} />

        </Container>
      </Box>

      <Box>
        <Button label={"ok"} onClick={handelClick} />
      </Box>

      <Box>
        <Typography variant="body1">
          The current theme is {isDarkMode ? "Dark" : "Light"}.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
