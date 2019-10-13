// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    selectAllStatus: true,
    totalPrice: ''
  },

  downCount(e) {
    const index = e.currentTarget.dataset.index
    let count = `carts[${index}].num`
    let num = --this.data.carts[index].num
    this.setData({
      [count]: num < 0 ? 0 : num
    })
    this.getTotalPrice()
  },

  addCount(e) {
    const index = e.currentTarget.dataset.index
    let count = `carts[${index}].num`
    this.setData({
      [count]: ++this.data.carts[index].num
    })
    this.getTotalPrice()
  },

  deleteList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index, 1)
    let hasList = carts.length ? true : false
    this.setData({
      carts: carts,
      hasList: hasList
    })
    this.getTotalPrice()
  },

  selectAll() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    carts.map(item => {
      item.selected = selectAllStatus
    })
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
    this.getTotalPrice()
  },

  selectList(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index
    let select = `carts[${index}].selected`
    this.setData({
      [select]: !this.data.carts[index].selected
    })
    if (
      this.data.carts.some(item => {
        return !item.selected
      })
    ) {
      this.setData({
        selectAllStatus: false
      })
    } else {
      this.setData({
        selectAllStatus: true
      })
    }
    this.getTotalPrice()
  },

  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    carts.forEach((item, index) => {
      if (item.selected) {
        total += item.num * item.price
      }
    })
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    setTimeout(() => {
      this.setData({
        hasList: true,
        carts: [{
            id: 1,
            title: '新鲜芹菜 半斤',
            image: '/image/s5.png',
            num: 4,
            price: 0.01,
            selected: true
          },
          {
            id: 2,
            title: '素米 500g',
            image: '/image/s6.png',
            num: 1,
            price: 0.03,
            selected: true
          }
        ]
      })
      this.getTotalPrice()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})