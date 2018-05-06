import React from 'react'
import { Animated } from 'react-native'
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'

// import rangeReducer from './redux/rangeReducer'
// import refsReducer from './redux/refsReducer'
import Sections from './sections'
// import Header from './header'
// import Submit from './submit'
import { SCREEN_HEIGHT } from '../../styles/variables'

const DatePicker = ({ visible, toggleVisible, submit }) => {
  const transform = [{
    translateY: visible.interpolate({
      inputRange: [0, 1],
      outputRange: [SCREEN_HEIGHT, 0],
      extrapolate: 'clamp'
    })
  }]

  return (
    <Animated.View style={{
      flex: 1,
      transform,
      backgroundColor: '#fff',
      zIndex: 999
    }}
    >
      {/* <Header toggleVisible={toggleVisible} /> */}
      <Sections />
      {/* <Submit submit={submit} /> */}
    </Animated.View>
  )
}
// class DatePicker extends PureComponent {
//   constructor(props) {
//     super(props)
//     const value = props.value
//       .map(item => item.replace(/'/g, '').split(' ')[0])

//     this.store = createStore(combineReducers({ rangeReducer: rangeReducer(value), refsReducer }))
//   }

//   render() {
//     const transform = [{
//       translateY: this.props.visible.interpolate({
//         inputRange: [0, 1],
//         outputRange: [SCREEN_HEIGHT, 0],
//         extrapolate: 'clamp'
//       })
//     }]

//     return (
//       <Provider store={this.store}>
//         <Animated.View style={{
//           flex: 1,
//           transform,
//           backgroundColor: '#fff',
//           zIndex: 999
//         }}
//         >
//           <Header toggleVisible={this.props.toggleVisible} />
//           <Sections />
//           <Submit submit={this.props.submit} />
//         </Animated.View>
//       </Provider>
//     )
//   }
// }

export default DatePicker
