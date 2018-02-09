import R from 'ramda'
import moment from 'moment'

const hasTwoValue = R.compose(
  R.equals(2),
  R.length,
  R.nthArg(0)
)

const isAfter = (a, b) => moment(b[0]).isAfter(a[0])
const isBefore = (a, b) => moment(b[0]).isBefore(a[0])

const isEmpty = R.compose(
  R.isEmpty,
  R.nthArg(0)
)

const setRange = R.cond([
  [isEmpty, R.concat],
  [hasTwoValue, R.nthArg(1)],
  [isAfter, R.concat],
  [isBefore, R.flip(R.concat)],
  [R.T, R.nthArg(1)]
])

const initState = []

export default (state = initState, action) => {
  switch (action.type) {
  case 'SET_RANGE':
    return setRange(state, [action.data])

  case 'AUTO_SELECT':
    return [...action.data]

  case 'CLEAR':
    return []

  default:
    return state
  }
}
