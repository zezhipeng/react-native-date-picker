import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import { propifyMethods } from 'react-propify-methods'
import { Subject } from 'rxjs'
import { connect, combineProps } from 'rx-react-container'

import 'moment/locale/zh-cn'

import Provider from './context'
import DrawerLayout from './component/drawer_layout'
import DateIcon from './assets/date.png'

import style from './style'

const drawerLayoutVisible$ = new Subject()
const onPressWatcher$ = new Subject()
  .subscribe(drawerLayoutVisible$)

const MyDrawerLayout = propifyMethods(DrawerLayout, 'toggleVisible')

moment.updateLocale('zh-cn')

const FULL_WEEKS = ['周六', '周日', '周一', '周二', '周三', '周四', '周五']

const App = (props) => {
  const value = ['2017-03', '2017-08']
  console.log('====================================')
  console.log(props)
  console.log('====================================')
  return (
    <Provider {...props}>
      <MyDrawerLayout toggleVisible$={drawerLayoutVisible$} value={['2017-03', '2017-08']}>
        <View style={style.container}>
          <TouchableOpacity onPress={() => onPressWatcher$.next()}>
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
                    .map(item => `${moment(item).format('M月D日')} ${FULL_WEEKS[moment(item).weekday()]}`)
                    .join(' ~ ')
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </MyDrawerLayout>
    </Provider>
  )
}

const appController = (container) => {
  const onSelect$ = new Subject()
    .map((v) => {
      console.log('====================================')
      console.log(v)
      console.log('====================================')
      return v
    })

  const value$ = container.getProp('initValue')
    .switchMap(value => onSelect$.map(v => {
      console.log('====================================')
      console.log(value, v)
      console.log('====================================')
      return v
    }))
    .startWith([])
    .scan((acc, item) => acc.concat(item), [])

  return combineProps({ value$ }, { onSelect$ })
}

export default connect(appController)(App)
