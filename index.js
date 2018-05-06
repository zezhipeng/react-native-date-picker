import React from 'react'
import { AppRegistry } from 'react-native'
import { setObservableConfig } from 'recompose'
import rxjsConfig from 'recompose/rxjsObservableConfig'

import App from './src'


setObservableConfig(rxjsConfig)

const datePicker = () => (
  <App initValue={['2017-03', '2017-08']} />
)

AppRegistry.registerComponent('datepicker', () => datePicker)
