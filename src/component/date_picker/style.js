import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, REGULAR, MEDIUM } from '../../styles/variables'
import { GREY_50, BLUE_DEEP, BLUE_LIGHT, WHITE, GREY_BLUE_LIGHT, BLUE, BLUE_LIGHT_100, BLUE_300 } from '../../styles/color'

const MONTH_PADDING = 18

export const DAY_CONAINER_WIDTH = (SCREEN_WIDTH - (MONTH_PADDING * 2)) / 7

const style = StyleSheet.create({
  sections: {
    backgroundColor: GREY_50
  },
  headerContainer: {
    justifyContent: 'flex-end',
    width: SCREEN_WIDTH,
    height: 210,
    backgroundColor: WHITE,
    paddingHorizontal: MONTH_PADDING
  },
  rangeContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 58,
    height: 77,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  weeksContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  weekBox: {
    width: DAY_CONAINER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekText: {
    fontSize: 13,
    color: GREY_BLUE_LIGHT
  },
  submitContainer: {
    width: SCREEN_WIDTH,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    width: SCREEN_WIDTH - 30,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE,
    borderRadius: 3
  },
  submitText: {
    fontSize: 17,
    color: WHITE,
    fontWeight: REGULAR
  }
})

export const rangeStyle = StyleSheet.create({
  rangeDate: {
    color: BLUE_DEEP,
    fontSize: 25,
    fontWeight: MEDIUM
  },
  rangeWeek: {
    marginTop: 10,
    color: BLUE_DEEP,
    fontSize: 25,
    fontWeight: MEDIUM
  },
  rangeEmpty: {
    fontSize: 25,
    color: '#B3BBC1',
    fontWeight: MEDIUM
  },
  divide: {
    position: 'absolute',
    left: SCREEN_WIDTH / 2,
    bottom: 40,
    width: 1,
    height: 81,
    backgroundColor: BLUE_LIGHT,
    transform: [{ rotate: '43deg' }]
  }
})

export const dayStyle = StyleSheet.create({
  dayContainer: {
    width: DAY_CONAINER_WIDTH,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
    backgroundColor: GREY_50
  },
  tomorrowText: {
    fontSize: 17,
    color: BLUE_LIGHT,
    fontWeight: MEDIUM
  },
  dayText: {
    fontSize: 17,
    color: BLUE_DEEP,
    fontWeight: MEDIUM
  },
  lunarDayText: {
    marginTop: 5,
    fontSize: 10,
    color: BLUE_LIGHT,
    fontWeight: MEDIUM
  }
})

export const monthStyle = StyleSheet.create({
  monthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH,
    paddingHorizontal: MONTH_PADDING
  },
  monthTextContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: MONTH_PADDING + 10,
    backgroundColor: GREY_50
  },
  monthText: {
    color: BLUE_DEEP,
    fontSize: 21,
    fontWeight: MEDIUM
  }
})

const activeStyle = active => ({
  ctx: {
    zIndex: 2,
    backgroundColor: active.interpolate({
      inputRange: [0, 1],
      outputRange: [GREY_50, BLUE],
      extrapolate: 'clamp'
    }),
    borderRadius: active.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 3],
      extrapolate: 'clamp'
    }),
    transform: [{
      scale: active.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.2, 1],
        extrapolate: 'clamp'
      })
    }]
  },
  text: {
    color: active.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_DEEP, WHITE],
      extrapolate: 'clamp'
    })
  },
  extra: {
    color: active.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_LIGHT, BLUE_LIGHT_100],
      extrapolate: 'clamp'
    })
  }
})

const betweenStyle = active => ({
  ctx: {
    backgroundColor: active.interpolate({
      inputRange: [0, 1],
      outputRange: [GREY_50, BLUE_LIGHT_100],
      extrapolate: 'clamp'
    })
  },
  text: {
    color: active.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_DEEP, BLUE],
      extrapolate: 'clamp'
    })
  },
  extra: {
    color: active.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_LIGHT, BLUE_300],
      extrapolate: 'clamp'
    })
  }
})

export const animatedStyle = (type, active) => (type === 'active'
  ? activeStyle(active)
  : betweenStyle(active)
)

export const auto = StyleSheet.create({
  ctx: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 36,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  font: {
    fontSize: 15,
    color: BLUE_DEEP
  }
})

export const headerTools = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 36,
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  lineCtx: {
    width: 16,
    height: 16
  },
  line: {
    width: 2,
    height: 22,
    position: 'absolute',
    top: 0,
    left: 7,
    backgroundColor: GREY_BLUE_LIGHT,
    borderRadius: 1
  },
  clearText: {
    fontSize: 17,
    color: GREY_BLUE_LIGHT
  }
})

export default style
