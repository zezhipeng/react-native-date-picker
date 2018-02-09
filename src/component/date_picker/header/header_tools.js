import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { headerTools } from '../style'

const rotate45 = {
  transform: [{ rotate: '45deg' }]
}

const rotate135 = {
  transform: [{ rotate: '-45deg' }]
}

const HeaderTools = ({ dispatch, toggleVisible }) => (
  <View style={headerTools.container}>
    <TouchableOpacity onPress={toggleVisible}>
      <View style={headerTools.lineCtx}>
        <View style={[headerTools.line, rotate45]} />
        <View style={[headerTools.line, rotate135]} />
      </View>
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
