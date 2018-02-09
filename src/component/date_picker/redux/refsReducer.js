import R from 'ramda'

const initState = {}

export default (state = initState, action) => {
  switch (action.type) {
  case 'SET_REF':
    return R.merge(state, { [action.data[0]]: action.data[1] })

  case 'AUTO_SELECT':
    return [...action.data]

  case 'CLEAR':
    return []

  default:
    return state
  }
}
