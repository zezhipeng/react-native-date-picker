import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { headerTools } from '../style'
import xPng from '../../../assets/x.png'

const HeaderTools = ({ dispatch, toggleVisible }) => (
  <View style={headerTools.container}>
    <TouchableOpacity onPress={toggleVisible}>
      <Image
        style={headerTools.linePng}
        source={xPng}
        resizeMode='contain'
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => dispatch({ type: 'CLEAR' })}
    >
      <View>
        <Text style={headerTools.clearText}>清除</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default connect()(HeaderTools)
