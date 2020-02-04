// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    totalPrice: 0,
    count: 0,
    isSelectAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //首次加载购物车数据
    this.setData({
      cartList: app.globalData.cartList
    })
    this.changeData()

    app.changeGoodsState = (index, goods) => {
      //修改对应项的状态
      this.setData({
        [`cartList[${index}]`]: goods
      })
      this.changeData()
    }

    app.addCartCallback = () => {
      this.setData({
        cartList: app.globalData.cartList
      })
      this.changeData()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`
    })
  },
  //全选按钮点击
  selectAll(){
    const cartList = this.data.cartList
    if(cartList.length != this.data.count){
      cartList.map(item => item.checked = true)
    }else{
      cartList.map(item => item.checked = !item.checked)
    }
    this.setData({
      cartList
    })
    this.changeData()
  },
  changeData(){
    const cartList = this.data.cartList
    //购物车总价
    let totalPrice = cartList.filter(item => {
      return item.checked
    }).reduce((pre, item) => {
      return pre + item.count * item.price
    }, 0)
    //勾选商品项数
    let count = cartList.filter(item => item.checked).length

    //购物车商品是否全部选中
    let isSelectAll = false
    if(count == cartList.length){
      isSelectAll = true
    }else{
      isSelectAll = false
    }
    this.setData({
      totalPrice,
      count,
      isSelectAll
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})