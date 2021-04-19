import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";

const StyledButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          ...styles.btn,
          borderRadius: props.rounded ? 35 : 0,
          backgroundColor: props.color,
          borderWidth: props.outlined ? 1 : 0,
          ...props.style,
        }}
      >
        <Text
          style={{
            color: ["#fff", "#ffffff", "white", undefined].includes(props.color)
              ? "black"
              : "white",
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    padding: 10,
    ...Platform.select({
      ios: {
        paddingVertical: 12,
      },
    }),
  },
});

export default StyledButton;
