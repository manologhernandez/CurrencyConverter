import React, { useContext } from "react"
import { StatusBar, FlatList, View, StyleSheet } from "react-native"

import { RowItem, RowSeparator } from "../components/RowItem"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ConversionContext } from "../util/ConversionContext"
import { Entypo } from "@expo/vector-icons"
import { api } from "../util/api"
import colors from "../constants/colors"
import currencies from "../data/currenices.json"

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.blue,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
})

export default ({ navigation, route = {} }) => {
  const {
    setBaseCurrency,
    setQuoteCurrency,
    setConversionRate,
    baseCurrency,
    quoteCurrency,
  } = useContext(ConversionContext)
  const params = route.params || {}
  const insets = useSafeAreaInsets()

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let isActive = false

          if (
            (params.isBaseCurrency && item == baseCurrency) ||
            (!params.isBaseCurrency && item == quoteCurrency)
          ) {
            isActive = true
          }
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item)
                } else {
                  setQuoteCurrency(item)
                }

                navigation.pop()
              }}
              rightIcon={
                isActive && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          )
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  )
}
