import ajax from './ajax';
export const getAddress = (latitude, longitude) => {
   return ajax(`/position/${latitude},${longitude}`)
}