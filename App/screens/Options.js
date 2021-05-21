import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native"
import { Entypo } from "@expo/vector-icons"
import colors from "../constants/colors"
import { RowItem, RowSeparator } from "../components/RowItem"

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Something went wrong", "Try again later")
  })
}

export default () => {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => alert("TODO!")}
        />

        <RowSeparator />

        <RowItem
          text="Facebook"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openURL("https://facebook.com")}
        />

        <RowSeparator />

        <RowItem
          text="Twitter"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openURL("https://twitter.com")}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
