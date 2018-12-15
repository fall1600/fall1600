import {apibase} from '@/static/apibase.json'
import axios from 'axios'
import real from '@/libs/api/real.js'
import qs from 'qs'

class API {

  constructor() {
    // this.mock = mock
  }

  getDefaultConfig(config) {
    let requestConfig = {
      baseURL: config.baseURL || apibase,
      url: config.url || '',
      method: config.type || 'GET',
      params: null,
      data: null,
      headers: {},
      responseType: config.responseType || 'json',
      token: config.token == false ? false : true,
      name: `api.${config.name}`,
      onDownloadProgress: event => {
        if(typeof config.onDownloadProgress != 'Function') return
        const progress = Math.floor(100*(event.loaded/event.total))
        config.onDownloadProgress({
          progress,
          event,
        })
      },
      onUploadProgress: event => {
        if(typeof config.onUploadProgress != 'Function') return
        const progress = Math.floor(100*(event.loaded/event.total))
        config.onUploadProgress({
          progress,
          event,
        })
      }
    }

    if(requestConfig.method.toUpperCase() == 'GET') {
      requestConfig.params = config.params || null
      requestConfig.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'indices' })
    }

    if(requestConfig.method.toUpperCase() != 'GET') {
      requestConfig.data = config.params || null
    }

    // if(requestConfig.token && tokenStore.get()) {
    //   requestConfig.headers.Authorization =`Bearer ${tokenStore.get()}`
    // }

    // 自訂authorization(串第三方api會需要)
    if(config.authorization) {
      requestConfig.headers.Authorization =`Bearer ${config.authorization}`
    }

    return requestConfig
  }

  request(config) {
    const self = this
    const axiosConfig = self.getDefaultConfig(config)
    return new Promise(async (resolve, reject) => {
      try {
        let result = await axios(axiosConfig)
        let resolveContent = axiosConfig.responseType == 'blob'
          ? {
            data: result.data,
            status: result.status,
            xhr: result.request,
          }
          : result.data
        resolve(resolveContent)
      } catch(error) {
        let response = error.response
        console.error(response)
        if (response) {
          response.name = `api.${config.name}.${response.status}`
        }
        reject(response)
      }
    })
  }
}

API = real(API)
export default new API()