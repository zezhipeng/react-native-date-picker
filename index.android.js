import React from 'react'
import { AppRegistry } from 'react-native'
import { setObservableConfig } from 'recompose'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import moment from 'moment'

import App from './src'

moment.locale('zh-cn')

setObservableConfig(rxjsConfig)

const datePicker = () => (
  <App value={['2018-04-11', '2018-04-12']} />
)

AppRegistry.registerComponent('datePicker', () => datePicker)
