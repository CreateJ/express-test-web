import http from './httpInstance'

const getList = http('post', '/list')

export default {
  getList
}
