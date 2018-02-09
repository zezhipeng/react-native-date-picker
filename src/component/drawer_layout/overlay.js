import React from 'react'
import { Animated } from 'react-native'
import { overlay as style } from './style'

const Overlay = ({ visibleState }) => {
  const opacity = visibleState.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [0, 1, 1],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View style={[style.overlay, { opacity }]} />
  )
}

export default Overlay
