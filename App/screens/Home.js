import React, { useState, useContext } from "react"
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { format } from "date-fns"
import { ConversionInput } from "../components/ConversionInput"
import { ConvertButton } from "../components/ConvertButton"
import { KeyboardSpacer } from "../components/KeyboardSpacer"
import { ConversionContext } from "../util/ConversionContext"
import { Entypo } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import colors from "../constants/colors"

const screen = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.12,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    paddingVertical: 12,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  header: {
    marginHorizontal: 20,
    alignItems: "flex-end",
  },
})

export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  } = useContext(ConversionContext)
  const [value, setValue] = useState("100")
  const conversionRate = 47.87
  const date = new Date()

  const [scrollEnabled, setScrollEnabled] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
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
            value={value}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                isBaseCurrency: true,
              })
            }
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                isBaseCurrency: false,
              })
            }
            keyboardType="numeric"
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
            onButtonPress={swapCurrencies}
          />
          <KeyboardSpacer onToggle={(toggle) => setScrollEnabled(toggle)} />
        </View>
      </ScrollView>
    </View>
  )
}
