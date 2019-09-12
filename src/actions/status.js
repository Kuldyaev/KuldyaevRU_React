import {CHANGE_MEASURING} from './constants'


const changeMeasuring = (width, height, scale) => ({
  type: CHANGE_MEASURING,
  width,
  height,
  scale,
  
})

export {changeMeasuring}