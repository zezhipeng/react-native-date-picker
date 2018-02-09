import React from 'react'
import { View, Text } from 'react-native'
import { monthStyle as style } from './style'

const Title = ({ section }) => (
  <View style={style.monthTextContainer}>
    <Text style={style.monthText}>
      {section.key}
    </Text>
  </View>
)

export default Title
