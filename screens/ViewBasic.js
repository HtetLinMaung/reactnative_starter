import React from "react";
import { View } from "react-native";

const ViewBasic = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{ backgroundColor: "orange", width: 100, height: 50 }}
      ></View>

      <View
        style={{ backgroundColor: "yellow", width: 100, height: 60 }}
      ></View>
      <View
        style={{ backgroundColor: "yellow", width: 100, height: 60 }}
      ></View>
      <View
        style={{ backgroundColor: "green", width: "100%", height: 100 }}
      ></View>
    </View>
  );
};

export default ViewBasic;
