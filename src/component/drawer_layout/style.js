import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../styles/variables'

const style = StyleSheet.create({
  content: {},
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 2
  }
})

export const overlay = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  }
})

export default style
