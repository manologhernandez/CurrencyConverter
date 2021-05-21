import React from "react"
import Navigation from "./config/Navigation"
import { ConversionContextProvider } from "./util/ConversionContext"

export default () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  )
}
