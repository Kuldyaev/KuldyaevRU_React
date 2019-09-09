import {CHANGE_MEASURING} from './constants'


const changeMeasuring = (width, height) => ({
  type: CHANGE_MEASURING,
  width,
  height,
  
})

export {changeMeasuring}