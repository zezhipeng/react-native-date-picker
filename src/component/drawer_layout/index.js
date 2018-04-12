import React, { PureComponent } from 'react'
import { Animated, View } from 'react-native'
import { Animated as AnimatedModal } from 'react-native-root-modal'
import DatePicker from '../date_picker'

import style from './style'

const OUT_TIMING = 200

class Drawer extends PureComponent {
  state = {
    visibleState: new Animated.Value(0),
    visible: false
  }

  toggleVisible = () => {
    const { visible } = this.state

    if (visible) {
      return this._close()
    }

    return this.setState({ visible: !visible }, this._open)
  }

  _toggle = (toValue, visible, cb = () => {}) => {
    Animated.spring(visible, {
      toValue,
      bounciness: 0,
      restSpeedThreshold: 0.1,
      useNativeDriver: true,
      duration: OUT_TIMING
    }).start(cb)
  }

  _open = () => {
    this._toggle(1, this.state.visibleState)
  }

  _close = () => {
    this._toggle(0, this.state.visibleState, this._closeVisible)
  }

  _closeVisible = () => {
    const { visible } = this.state

    this.setState({ visible: !visible })
  }

  submit = (data) => {
    this.toggleVisible()
    this.props.submit(data)
  }

  render() {
    return (
      <View style={style.content}>
        <AnimatedModal
          style={style.container}
          visible={this.state.visible}
        >
          <DatePicker
            value={this.props.value}
            visible={this.state.visibleState}
            toggleVisible={this.toggleVisible}
            submit={this.submit}
          />
        </AnimatedModal>
        {this.props.children}
      </View>
    )
  }
}

export default Drawer
