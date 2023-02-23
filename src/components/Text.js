import React from "react";
import { Text as NativeText } from "react-native";

const fontSize = 10;
const styles = {
  fontSize,
};

import { textColor } from "../constants/color";

const Text = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        // fontFamily: 'DMSansRegular',
        color: textColor,
        fontSize: 15,
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  );
};

export default Text;
