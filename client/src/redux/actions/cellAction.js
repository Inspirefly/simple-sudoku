import { SET_LOCATION, TOGGLE_PENCIL, PENCIL_NUM } from './types';

export const setLocation = (location) => {
  return ({
    type: SET_LOCATION,
    payload: location
  });
}

export const togglePencil = () => {
  return ({
    type: TOGGLE_PENCIL
  });
}

export const pencilNum = (num) => {
  return ({
    type: PENCIL_NUM,
    payload: num
  });
}