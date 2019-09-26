import { RECEIVE_CHOICE } from '../actions'

function topic (state = [], action) {
  switch (action.type) {
    case RECEIVE_CHOICE:
      return action.choice

    default:
      return state
  }
}

export default topic
