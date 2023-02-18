import React, { useState } from "react";
import { View, TextInput } from "react-native";

import Text from "./Text";
import {
  textInputBackground,
  textColor,
  textInputBorder,
  inputTextColor,
  textBorderFocused,
} from "../constants/color";

const ref = React.createRef();
const Input = ({
  ref,
  value,
  onEndEditing,
  onChangeText,
  placeholder = "",
  autoCapitalize = "none",
  secureTextEntry = false,
  keyboardType = "",
  maxLength,
  coverStyle = {},
  LeftIcon = null,
  multiline = false,
  style = {},
  editable = true,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: isFocused ? textBorderFocused : textInputBorder,
        width: 358,
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: multiline ? 10 : 0,
        paddingHorizontal: 15,
        position: "relative",
        backgroundColor: textInputBackground,
        ...coverStyle,
      }}
    >
      {LeftIcon && (
        <View style={{ marginRight: 10 }}>
          <LeftIcon />
        </View>
      )}
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        maxLength={maxLength}
        placeholderTextColor={inputTextColor}
        multiline={multiline}
        editable={editable}
        style={{
          color: "#dadee6",
          flex: 1,
          height: "100%",
          paddingLeft: 5,
          textAlignVertical: multiline ? "top" : "center",
          ...style,
        }}
        {...props}
      />
    </View>
  );
};

export default Input;
