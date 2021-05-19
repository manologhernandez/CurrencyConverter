import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white
  },
  text: {
    fontSize: 16,
    color: colors.text
  },
  separator: {
    backgroundColor: colors.border,
    marginStart: 20,
    height: StyleSheet.hairlineWidth
  }
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
