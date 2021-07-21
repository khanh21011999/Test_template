import { Dimensions } from 'react-native'
const designScreen = 414
const currentWidth = Dimensions.get("window").width

export const screenPercent: number = currentWidth / designScreen
