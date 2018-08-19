import axios from 'axios'
import Router from '@/router'

const instance = axios.create({
  baseURL: 'http://192.168.1.105:8080'
})

export default instance
