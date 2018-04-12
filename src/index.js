import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { compose, withHandlers, withProps } from 'recompose'
import moment from 'moment'
import 'moment/locale/zh-cn'

import DrawerLayout from './component/drawer_layout'


import DateIcon from './assets/date.png'
import LeftIcon from './assets/left.png'
import RightIcon from './assets/right.png'

import style from './style'

moment.updateLocale('zh-cn')


const FULL_WEEKS = ['周六', '周日', '周一', '周二', '周三', '周四', '周五']

class RefsStore {
  store(name, value) {
    this[name] = value
  }
}

const App = ({
  toggleVisible,
  setRef,
  onChange,
  value
}) => (
  <DrawerLayout ref={setRef} submit={onChange} value={value}>
    <View style={style.container}>
      <TouchableOpacity onPress={toggleVisible}>
        <View style={style.center}>
          <View style={style.left}>
            <Image
              style={style.leftIcon}
              source={DateIcon}
              resizeMode='contain'
            />
            <Text style={style.centerText}>
              选择日期
            </Text>
          </View>
          <View style={style.right}>
            <Text style={style.rightText}>
              {value
                .map(item => item.replace(/'/g, ''))
                .map(item => `${moment(item).format('M月D日')} ${FULL_WEEKS[moment(item).weekday()]}`)
                .join(' ~ ')
              }
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </DrawerLayout>
)

const withToggleVisible = withHandlers({
  toggleVisible: ({ refs }) => () => refs.Drawer.toggleVisible()
})

const withRefsStore = withProps({
  refs: new RefsStore()
})

const setRef = withProps(props => ({
  setRef: ref => props.refs.store('Drawer', ref)
}))

export default compose(
  withRefsStore,
  setRef,
  withToggleVisible
)(App)
