import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import { renderComponent, branch, compose } from 'recompose'
import { rangeStyle as style } from '../style'

const FULL_WEEKS = ['周六', '周日', '周一', '周二', '周三', '周四', '周五']

const Range = ({ item }) => (
  <View>
    <Text style={style.rangeDate}>{moment(item).format('MM月DD日')}</Text>
    <Text style={style.rangeWeek}>{FULL_WEEKS[moment(item).weekday()]}</Text>
  </View>
)

const RangeBegin = () => (
  <View key='begin'>
    <Text style={style.rangeEmpty}>开始</Text>
    <Text style={[style.rangeEmpty, { marginTop: 10 }]}>日期</Text>
  </View>
)

const RangeEnd = () => (
  <View key='end'>
    <Text style={style.rangeEmpty}>结束</Text>
    <Text style={[style.rangeEmpty, { marginTop: 10 }]}>日期</Text>
  </View>
)

const renderWhileEmptyBegin = branch(
  props => props.item === '开始时间',
  renderComponent(RangeBegin)
)

const renderWhileEmptyEnd = branch(
  props => props.item === '结束时间',
  renderComponent(RangeEnd)
)

const EnhanceRange = compose(
  renderWhileEmptyBegin,
  renderWhileEmptyEnd
)(Range)

const renderRange = (item, index) => (<EnhanceRange key={index} item={item} />)

export default renderRange
