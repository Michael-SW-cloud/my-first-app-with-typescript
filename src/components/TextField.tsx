import React from "react";
import { Container, TextField } from "@mui/material";
import { Theme } from "@mui/system";
import { textStyleColor } from "../style";

interface TextFieldProps {
  props: string;
}

const Textfield: React.FC<TextFieldProps> = (props) => {
  //const classes = useStyles();
  console.log(props.props);
  return (
    <Container className="div-field-text">
      <TextField
        disabled
        id="filled-disabled"
        className="field-text"
        value={props.props}
        sx={textStyleColor}
      />
    </Container>
  );
};
export default Textfield;
