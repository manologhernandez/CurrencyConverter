import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import colors from "../constants/colors";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row"
  },
  containerDisabled: {
    backgroundColor: colors.offWhite
  },
  button: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue
  },
  input: {
    padding: 12,
    color: colors.textLight,
    flex: 1,
    fontSize: 16
  }
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyle = [style.container];

  if (props.editable === false) {
    containerStyle.push(style.containerDisabled);
  }
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={style.button} onPress={onButtonPress}>
        <Text style={style.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={style.input} {...props} />
    </View>
  );
};
