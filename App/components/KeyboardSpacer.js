import React, { useState, useEffect } from "react";
import { Keyboard, View, Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    left: 0,
    right: 0,
    bottom: 0
  }
});

const screen = Dimensions.get("window");

export const KeyboardSpacer = ({ onToggle }) => {
  const [keyBoardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", event => {
      //   console.log(event);
      //   const screenHeight = screen.height;
      //   const endY = event.endCoordinates.screenY;
      //   console.log(screenHeight, endY);
      //   setKeyboardHeight(screenHeight - endY);
      setKeyboardHeight(20);
      onToggle(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
      onToggle(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return <View style={[styles.content, { height: keyBoardHeight }]} />;
};
