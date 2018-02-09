import React, { PureComponent } from 'react'
import { SectionList } from 'react-native'
import { compose, withProps } from 'recompose'
import R from 'ramda'
import { connect } from 'react-redux'
import moment from 'moment'
import { getSections, getStart, getEnd } from '../../utils/date'
import renderItem from './month'
import style from './style'

const YEAR = 'YYYY'
const MONTH = 'MM'

const keyExtractor = (item, index) => `${index}`

class Sections extends PureComponent {
  render() {
    const { sections, setRef } = this.props
    return (
      <SectionList
        ref={setRef}
        inverted
        style={style.sections}
        sections={sections}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
      />
    )
  }
}

const setState = state => ({ range: state.rangeReducer })

const isActive = day => ({
  ...day,
  type: 'active'
})

const isBetween = day => ({
  ...day,
  type: 'between'
})

const isNor = day => ({
  ...day,
  type: ''
})

const passBetween = range =>
  ({ full }) => range.length === 2 && moment(full).isBetween(range[0], range[1])

const setRange = withProps({
  sections: getSections(getStart(YEAR, MONTH), getEnd(YEAR, MONTH))
})

const isIncludes = range => day => range.includes(day)

const mapMonth = range => R.cond([
  [R.pipe(R.prop('full'), isIncludes(range)), isActive],
  [passBetween(range), isBetween],
  [R.T, isNor]
])

const setSections = withProps(({ sections, range = [] }) => {
  const mapFn = R.evolve({
    data: R.map(R.map(mapMonth(range)))
  })

  const mapSections = R.compose(
    R.reverse,
    R.map(mapFn)
  )

  return { sections: mapSections(sections) }
})

const withSetRef = withProps(props => ({
  setRef: ref => props.dispatch({ type: 'SET_REF', data: ['Sections', ref] })
}))

export default compose(
  connect(setState),
  setRange,
  setSections,
  withSetRef
)(Sections)
