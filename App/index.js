import React from "react"
import Navigation from "./config/Navigation"
import { ConversionContextProvider } from "./util/ConversionContext"
import { api } from "./util/api"

export default () => {
  //   api("USD", "PHP")
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  )
}
