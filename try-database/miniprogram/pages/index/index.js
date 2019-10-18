//index.js
const db=wx.cloud.database();
const app = getApp()
const productsCollection = db.collection('products')

Page({
  data: {
    products:[],
    page:0
  },
  onLoad(){
    productsCollection.get().then(res =>{this.setData({
      products:res.data
    })})
  },
  onPullDownRefresh(){
    productsCollection.get().then(res=>{
      this.setData({
        page:0,
        products:res.data
      },res=>{
        wx.stopPullDownRefresh();
      })
    })
  },
  onReachBottom(){
    wx.showLoading({
      title: '正在加载',
    })
    let page =this.data.page + 20;

    productsCollection.skip(page).get().then(res=>{
      wx.hideLoading();
      let new_data = res.data;
      let old_data = this.data.products;
      this.setData({
        products:old_data.concat(new_data),
        page:page
      })
    })
    this.setData({
      page:page
    })
  }
  
    

})
