import request from './network.js'

export function getMultiData(){
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}