import config from './config.js'
import * as Mock from './mock'

let util = {
  isDev: config.isDev,
  log() {
    this.isDev && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if ('object' === typeof content) {
      content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
    }
    showModal({
      title: title,
      content: content
    })
  },
  setStorage(key, value = '', cb) {
    wx.setStorage({
      key: key,
      data: value,
      success(res) {
        cb && cb()
      }
    })
  },
  getStorage(key, cb) {
    wx.getStorage({
      key: key,

      success(res) {
        cb && cb()
      }
    })
  },
  request(opt) {
    let {
      url,
      data,
      header,
      method,
      dataType,
      mock = false
    } = opt;
    let self = this
    return new Promise((resolve,reject) => {
      if(mock){
        let res ={
          statusCode:200,
          data:Mock[url]
        }
        if(res && res.statusCode===200 && res.data){
          resolve(res.data)
        }else{
          self.alert('提示',res)
          return resolve(res,data)
        }
      }
      else{
        wx.request({
          url: url,
          data:data,
          header:header,
          method:method,
          dataType:dataType,
          success(res){
            if (res && res.statusCode === 200 && res.data){
              resolve(res)
            }
            else{
              self.alert('提示',res)
            }
          },faie(err){
            self.log(err)

            self.alert('提示', err)
            reject(res)
          }
        })
      }
    })
  }
}

export default util