import React, { createContext, useState, useEffect } from "react"
import { useDebugValue } from "react"
import { Alert } from "react-native"
import { api } from "../util/api"
export const ConversionContext = createContext()
export const ConversionContextProvider = ({ children }) => {
  const DEFAULT_BASE_CURRENCY = "USD"
  const DEFAULT_QUOTE_CURRENCY = "PHP"

  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY)
  const [quoteCurrency, _setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY)
  const [conversionRate, setConversionRate] = useState("Loading")
  const [isLoading, setIsLoading] = useState(true)

  const setBaseCurrency = (currency) => {
    setIsLoading(true)
    _setBaseCurrency(currency)
    api(currency, quoteCurrency)
      .then((json) => {
        console.log(json)
        if (json) {
          setConversionRate(json[Object.keys(json)[0]])
        } else {
          setConversionRate("Network Error")
        }
      })
      .catch((err) => Alert.alert("Network Error!"))
      .finally(() => setIsLoading(false))
  }
  const setQuoteCurrency = (currency) => {
    setIsLoading(true)
    _setQuoteCurrency(currency)
    api(baseCurrency, currency)
      .then((json) => {
        console.log(json)
        if (json) {
          setConversionRate(json[Object.keys(json)[0]])
        } else {
          setConversionRate("Network Error")
        }
      })
      .catch((err) => {
        Alert.alert("Network Error!")
      })
      .finally(() => setIsLoading(false))
  }

  const swapCurrencies = () => {
    setIsLoading(true)
    _setBaseCurrency(quoteCurrency)
    _setQuoteCurrency(baseCurrency)
    api(quoteCurrency, baseCurrency)
      .then((json) => {
        console.log(json)
        if (json) {
          setConversionRate(json[Object.keys(json)[0]])
        } else {
          setConversionRate("Network Error")
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    conversionRate,
    setConversionRate,
    isLoading,
  }

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY)
  }, [])
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  )
}
