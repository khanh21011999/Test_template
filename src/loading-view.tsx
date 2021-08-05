import * as React from "react"
import { ActivityIndicator, View, ViewStyle } from "react-native"

const CONTAINER: ViewStyle = {
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 99,
}

const WRAPPER: ViewStyle = {
  alignItems: "stretch",
  bottom: 0,
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
}

/**
 * Describe your component here
 */
export const LoadingView = () => {
  return (
    <View style={CONTAINER}>
      <View style={WRAPPER}>
        <ActivityIndicator animating color="grey" size="large" />
      </View>
    </View>
  )
}
