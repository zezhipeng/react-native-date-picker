import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { compose, withProps, withHandlers } from 'recompose'
import moment from 'moment'
import { connect } from 'react-redux'
import R from 'ramda'
import { auto } from '../style'

const DATE_FORMAT = 'YYYY-MM-DD'
const today = () => moment().format(DATE_FORMAT)
const getTime = (num, step) => moment().subtract(num, step).format(DATE_FORMAT)

const AutoSelect = ({
  mode,
  setLastWeek,
  setLastMonth,
  setThreeMonthAgo
}) => (
  <View style={auto.ctx}>
    <TouchableOpacity onPress={setLastWeek}>
      <View>
        <Text
          style={[
            auto.font,
            { color: mode === 'week' ? '#0C90FF' : '#021D33' }
          ]}
        >近一周
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={setLastMonth}>
      <View>
        <Text
          style={[
            auto.font,
            { color: mode === 'month' ? '#0C90FF' : '#021D33' }
          ]}
        >近一月
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={setThreeMonthAgo}>
      <View>
        <Text
          style={[
            auto.font,
            { color: mode === 'threeMonth' ? '#0C90FF' : '#021D33' }
          ]}
        >近三月
        </Text>
      </View>
    </TouchableOpacity>
    <Text
      style={[
        auto.font,
        { color: mode === 'manual' ? '#0C90FF' : '#021D33' }
      ]}
    >自定义
    </Text>
  </View>
)

const modeSwitch = ({ lastWeek, lastMonth, threeMonthAgo }) => R.cond([
  [R.equals(lastWeek), R.always('week')],
  [R.equals(lastMonth), R.always('month')],
  [R.equals(threeMonthAgo), R.always('threeMonth')],
  [R.T, R.always('manual')]
])

const withMode = withProps(props => ({
  mode: modeSwitch(props)(props.range)
}))

const setAutoData = withProps({
  lastWeek: [getTime(1, 'week'), today()],
  lastMonth: [getTime(1, 'month'), today()],
  threeMonthAgo: [getTime(3, 'month'), today()]
})

const withScrollToEnd = withProps(({ refs }) => ({
  scrollToEnd: () => refs.Sections.scrollToLocation({
    sectionIndex: 0,
    itemIndex: 0,
    viewPosition: 0,
    viewOffset: 0
  })
}))

const setDate = withHandlers({
  setLastWeek: ({
    lastWeek,
    dispatch,
    scrollToEnd
  }) => () => {
    scrollToEnd()
    dispatch({ type: 'AUTO_SELECT', data: lastWeek })
  },
  setLastMonth: ({
    lastMonth,
    dispatch,
    scrollToEnd
  }) => () => {
    scrollToEnd()
    dispatch({ type: 'AUTO_SELECT', data: lastMonth })
  },
  setThreeMonthAgo: ({
    threeMonthAgo,
    dispatch,
    scrollToEnd
  }) => () => {
    scrollToEnd()
    dispatch({ type: 'AUTO_SELECT', data: threeMonthAgo })
  }
})

const setState = state => ({
  refs: state.refsReducer,
  range: state.rangeReducer
})

export default compose(
  connect(setState),
  withScrollToEnd,
  setAutoData,
  withMode,
  setDate
)(AutoSelect)
