import React, { PureComponent } from 'react'
import { Animated } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import rangeReducer from './redux/rangeReducer'
import refsReducer from './redux/refsReducer'
import Sections from './sections'
import Header from './header'
import Submit from './submit'
import { SCREEN_HEIGHT } from '../../styles/variables'

class DatePicker extends PureComponent {
  constructor(props) {
    super(props)
    this.store = createStore(combineReducers({ rangeReducer, refsReducer }))
  }

  render() {
    const transform = [{
      translateY: this.props.visible.interpolate({
        inputRange: [0, 1],
        outputRange: [SCREEN_HEIGHT, 0],
        extrapolate: 'clamp'
      })
    }]

    return (
      <Provider store={this.store}>
        <Animated.View style={{ flex: 1, transform }}>
          <Header toggleVisible={this.props.toggleVisible} />
          <Sections />
          <Submit />
        </Animated.View>
      </Provider>
    )
  }
}

export default DatePicker
