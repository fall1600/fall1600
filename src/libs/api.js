import {apibase} from '@/static/apibase.json'
import axios from 'axios'
import real from '@/libs/api/real.js'

class API {

  constructor () {
    this.core = axios.create({
      baseURL: apibase,
      timeout: null,
      responseType: 'json',
      responseEncoding: 'utf8'
    })
  }

  _request (type, url, data = null, withToken = true) {
    let config = {
      url: url,
      method: type,
      params: data,
    }
    return this.core.request(config)
  }

}

API = real(API)
export default new API()