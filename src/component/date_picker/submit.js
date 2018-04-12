import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

import style from './style'

const Submit = ({ submit }) => (
  <View style={style.submitContainer}>
    <TouchableOpacity
      onPress={submit}
      style={style.submitBtn}
    >
      <Text style={style.submitText}>确认</Text>
    </TouchableOpacity>
  </View>
)

const setState = state => ({ range: state.rangeReducer })
const withSubmit = withProps(props => ({
  submit: () => props.submit(props.range)
}))

export default compose(
  connect(setState),
  withSubmit
)(Submit)

