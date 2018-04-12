import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './styles/variables'

const style = StyleSheet.create({
  content: {},
  container: {
    justifyContent: 'center',
    height: 42,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15
  },
  leftText: {
    fontSize: 13,
    color: '#808E99'
  },
  leftIcon: {
    width: 16,
    marginRight: 15
  },
  center: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30
  },
  centerText: {
    fontSize: 15,
    color: '#65768E'
  },
  centerIcon: {
    width: 16,
    marginLeft: 10
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  rightText: {
    fontSize: 13,
    color: '#808E99'
  },
  rightIcon: {
    width: 7,
    marginLeft: 5
  }
})

export default style
