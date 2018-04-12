import React, { PureComponent } from 'react'

import { TouchableWithoutFeedback, Animated, Text, View } from 'react-native'
import { withProps, compose, pure, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment'
import { DAY_CONAINER_WIDTH, animatedStyle, dayStyle as style } from './style'

const today = moment()

class Day extends PureComponent {
  state = {
    isActive: false,
    active: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps) {
    const { type } = nextProps
    const { isActive } = this.state

    if (type && !isActive) {
      return this._toggleActive(() => this._toggleAnimated(1))
    }

    if (!type && isActive) {
      return this._toggleActive(() => this._toggleAnimated(0))
    }

    return null
  }

  _toggleActive = (cb = () => {}) => {
    const { isActive } = this.state

    this.setState({ isActive: !isActive }, cb)
  }

  _toggleAnimated = (toValue, cb = () => {}) => {
    Animated.spring(this.state.active, {
      toValue,
      bounciness: 0,
      restSpeedThreshold: 0.1,
      duration: 50
    }).start(cb)
  }

  render() {
    const {
      day,
      lunarDay,
      offsetStyle,
      setRange,
      type
    } = this.props
    const animatedObj = animatedStyle(type, this.state.active)

    return (
      <TouchableWithoutFeedback
        onPress={setRange}
      >
        <Animated.View style={[style.dayContainer, offsetStyle, animatedObj.ctx]}>
          <Animated.Text style={[style.dayText, animatedObj.text]}>
            {day}
          </Animated.Text>
          <Animated.Text style={[style.lunarDayText, animatedObj.extra]}>
            {lunarDay}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

const Tomorrow = ({
  day,
  lunarDay,
  offsetStyle
}) => (
  <View style={[style.dayContainer, offsetStyle]}>
    <Text style={[style.tomorrowText]}>
      {day}
    </Text>
    <Text style={[style.lunarDayText]}>
      {lunarDay}
    </Text>
  </View>
)

const setProps = withProps(({
  index,
  full,
  dispatch,
  weekdays
}) => ({
  offsetStyle: index === 0 ? { marginLeft: DAY_CONAINER_WIDTH * weekdays } : {},
  setRange: () => dispatch({ type: 'SET_RANGE', data: full })
}))

const renderWhileIsTomorrow = branch(
  props => today.isBefore(props.full),
  renderComponent(Tomorrow)
)

const EnhanceDay = compose(
  connect(),
  setProps,
  renderWhileIsTomorrow,
  pure
)(Day)

export default (item, index) => <EnhanceDay key={index} index={index} {...item} />
