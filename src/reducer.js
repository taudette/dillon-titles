const INITIAL_STATE = {
  titles: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_TITLES':
    return Object.assign({}, state, {titles: action.data});
  default:
    return state;
  }
}

