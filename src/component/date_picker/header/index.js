import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import R from 'ramda'
import HeaderTools from './header_tools'
import AutoSelect from './auto_select'
import renderRange from './range'
import style from '../style'

const weeks = ['日', '一', '二', '三', '四', '五', '六']

const renderWeek = (item, index) => (
  <View key={index} style={style.weekBox}>
    <Text style={style.weekText}>{item}</Text>
  </View>
)

const Header = ({ range, ref, toggleVisible }) => (
  <View style={style.headerContainer}>
    <HeaderTools toggleVisible={toggleVisible} />
    <AutoSelect ref={ref} />
    <View style={style.divide} />
    <View style={style.rangeContainer}>
      {range.map(renderRange)}
    </View>
    <View style={style.weeksContainer}>
      {weeks.map(renderWeek)}
    </View>
  </View>
)

const setState = state => ({ range: state.rangeReducer })

const lengthEq1 = R.compose(
  R.equals(1),
  R.length
)

const isEmpty = () => (['开始时间', '结束时间'])
const onlyBegin = item => R.concat(item, ['结束时间'])

const mapRange = R.compose(
  R.assoc('range', R.__, {}),
  R.cond([
    [R.isEmpty, isEmpty],
    [lengthEq1, onlyBegin],
    [R.T, R.identity]
  ]),
  R.defaultTo([]),
  R.prop('range')
)
const setRange = withProps(mapRange)

export default compose(
  connect(setState),
  setRange
)(Header)
