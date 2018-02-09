import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

const Submit = () => (
  <View style={style.submitContainer}>
    <TouchableOpacity
      style={style.submitBtn}
    >
      <Text style={style.submitText}>确认</Text>
    </TouchableOpacity>
  </View>
)

export default Submit

