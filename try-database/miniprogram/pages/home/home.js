// miniprogram/pages/home/home.js
Page({
  navigateToAdd:function(event){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  navigateToIndex: function(){
    wx.navigateTo({
      url: '../index/index',
    })
  }
    
})