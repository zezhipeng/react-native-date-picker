import React from 'react'
import { View } from 'react-native'
import { monthStyle as style } from './style'
import renderDay from './day'
import Title from './title'

const Month = ({ item, section }) => (
  <View>
    <Title section={section} />
    <View style={style.monthContainer}>
      {item.map(renderDay)}
    </View>
  </View>
)

export default Month
