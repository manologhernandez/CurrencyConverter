import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView
} from "react-native";
import { format } from "date-fns";
import { ConversionInput } from "../components/ConversionInput";
import { ConvertButton } from "../components/ConvertButton";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1
  },
  content: {
    paddingTop: screen.height * 0.15
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    paddingVertical: 12
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center"
  }
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "PHP";
  const conversionRate = 47.87;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert("todo!")}
            keyBoardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() => alert("todo!")}
            keyBoardType="numeric"
            onChangeText={text => console.log("text", text)}
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM dd, yyyy"
            )}`}
          </Text>
          <ConvertButton
            text="Reverse Currencies"
            onButtonPress={() => alert("todo!")}
          />
          <KeyboardSpacer onToggle={toggle => setScrollEnabled(toggle)} />
        </View>
      </ScrollView>
    </View>
  );
};
