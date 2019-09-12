import {CHANGE_MEASURING} from '../actions/constants'

const status = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MEASURING:
      return { 
          'width' : action.width,
          'height': action.height,
          'scale': action.scale,
      }
    default:
      return state
  }
}

export default status