import React, { PureComponent } from 'react'
import { SectionList } from 'react-native'
import { compose, withProps } from 'recompose'
import R from 'ramda'
import { connect } from 'react-redux'
import moment from 'moment'
import { propifyMethods } from 'react-propify-methods'
import { Consumer } from '../../context'

import { getSections, getStart, getEnd } from '../../utils/date'
import renderItem from './month'
import style from './style'

const YEAR = 'YYYY'
const MONTH = 'MM'

// const findSectionIndex = R.converge(
//   R.findIndex,
//   [R.pipe(R.nthArg(0), R.propEq('key')), R.nthArg(1)]
// )

const keyExtractor = (item, index) => `${index}`

// const setState = state => ({ range: state.rangeReducer })

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

const setValue = withProps({
  sections: getSections(getStart(YEAR, MONTH), getEnd(YEAR, MONTH))
})

const isIncludes = range => day => range.includes(day)

const mapMonth = range => R.cond([
  [R.pipe(R.prop('full'), isIncludes(range)), isActive],
  [passBetween(range), isBetween],
  [R.T, isNor]
])

const setSections = withProps(({ sections }) => ({
  sections: R.reverse(sections)
}))

const withSetRef = withProps(props => ({
  setRef: ref => props.dispatch({ type: 'SET_REF', data: ['Sections', ref] })
}))

const MySectionList = propifyMethods(SectionList, 'scrollToLocation')

const Sections = ({ sections }) => (
  <MySectionList
    // ref={this.setRef}
    inverted
    // onLayout={async () => {
    //   const startHref = moment(this.props.range[0]).format('YYYY年M月')
    //   const sectionIndex = findSectionIndex(startHref, this.state.sections)
    //   this.sections.scrollToLocation({
    //     sectionIndex,
    //     itemIndex: 0,
    //     viewPosition: 0,
    //     viewOffset: 0
    //   })
    //   setTimeout(() => {
    //     this.update(this.props)
    //   }, sectionIndex * 200)
    // }}
    // getItemLayout={this.getItemLayout}
    style={style.sections}
    sections={sections}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    stickySectionHeadersEnabled={false}
  />
)

export default compose(
  // connect(setState),
  setValue,
  setSections,
)(Sections)

// export default props => (
//   <Consumer>
//     {context => (
//       <Enhance
//         {...props}
//         value={context.value}
//       />
//     )}
//   </Consumer>
// )
