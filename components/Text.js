import React from "react";
import { Text as NativeText } from "react-native";

const Text = (props) => (
  <NativeText {...props} style={{ fontFamily: "Poppins", ...props.style }}>
    {props.children}
  </NativeText>
);

export default Text;
