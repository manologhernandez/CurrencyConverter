import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 12
  },
  text: {
    color: colors.white,
    fontSize: 16
  }
});

export const ConvertButton = ({ text, onButtonPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <Image
        style={styles.image}
        source={require("../assets/images/reverse.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
