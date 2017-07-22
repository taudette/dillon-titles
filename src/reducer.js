import GET_TITLES from './actions.js'

const INITIAL_STATE = {
  titles: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_TITLES':
    return Object.assign({}, state, {tiles: action.titles});
  default:
    return state;
  }
}