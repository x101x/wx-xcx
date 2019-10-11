'use strict'
import util from '../../utils/index'
import config from '../../utils/config'
let app = getApp()
let isDev = config.isDev
let handler = {
  data: {
    page: 1,
    pageSize: 4,
    days: 3,
    totalSize: 0,
    hasMore: true,
    articleList: [],
    defaultImg: config.defaultImg
  },
  onLoad() {
    this.requestAticle()
  },
  requestAticle() {
    util.request({
        url: 'list',
        mock: true,
        data: {
          tag: '微信热门',
          start: this.data.page || 1,
          days: this.data.days || 3,
          pageSize: this.data.pageSize,
          langs: config.appLang || 'en'
        }
      })
      .then(res => {
        if (res && res.status === 0 && res.data && res.data.length) {
          let articleData = res.data;
          //格式化原始数据
          let formatData = this.formatArticalData(articleData)
          this.renderArticle(formatData)
          // dateConvert() 
          util.log(articleData)
        } else if (this.data.page === 1 && res.data.length === 0) {
          util.alert()
          // ------
        } else if (this.data.page !== 1 && res.data && res.data.length == 0) {
          this.setData({
            hasMore: false
          })
        } else {
          util.alert('提示', res)
          this.setData({
            hasMore: false

          })
          return null;
        }
      })
  },
  //格式化
  dateConvert(dateStr) {
    if (!dateStr) {
      return ''
    }
    let today = new Date(),
      todayYear = today.getFullYear(),
      todayMonth = ('0' + (today.getMonth() + 1)).slice(-2),
      todayDay = ('0' + (today.getDate())).slice(-2);
    let convertStr = ''
    let originYear = +dateStr.slice(0, 4)
    let todayFormat = `${todayYear}-${todayMonth}-${todayDay }`
    console.log(dateStr, '--',todayFormat)
    if (dateStr === todayFormat) {
      convertStr = '今日'
    } else if (originYear < todayYear) {
      let splitStr = dateStr.split('-')
      convertStr = `${splitStr[0]}年${splitStr[1]}月${splitStr[2]}日`
    } else {
      convertStr = dateStr.slice(5).replace('-', '月') + '日'
    }
    return convertStr
  },
  formatArticalData(data){
    let formatData = undefined
    if(data && data.length){
      formatData = data.map((group)=>{
        group.formatData = this.dateConvert(group.date)
        return group
      })
    }
    return formatData
  },
  renderArticle(data){
    if(data&&data.length){
      let newList = this.data.articleList.concat(data)
      this.setData({
        articleList:newList,
        hiddenLoading:true
      })
    }
  },
  onReachBottom(){
    if(this.data.hasMore){
      let nextPage = this.data.page +1;
      this.setData({
        page:nextPage
      })
      this.requestAticle()
    }
  }

}
Page(handler)