import { Dimensions, StatusBar } from 'react-native'

const { height, width } = Dimensions.get('window')

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height
export const REGULAR = '400'
export const MEDIUM = '600'

