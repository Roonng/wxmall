// pages/detail/detail.js
import { getDetail,GoodsBaseInfo,ShopInfo } from "../../service/detail"
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    iid: "",
    topImages: [],
    baseInfo: {},
    shopInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const iid = options.iid
    this.setData({
      iid
    })
    this._getDetail(iid)

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

  },
  //加入购物车
  onAddCart(){
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;
    obj.count = 1

    app.addToCart(obj)
    wx.showToast({
      title: '已添加到购物车'
    })
  },
  //获取详情页数据
  _getDetail(iid){
    getDetail(iid).then(res => {
      console.log(res)
      const data = res.data.result
      console.log(data)
      const topImages = data.itemInfo.topImages

      // 创建BaseInfo对象
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 创建ShopInfo对象
      const shopInfo = new ShopInfo(data.shopInfo);
      console.log(topImages)
      this.setData({
        topImages,
        baseInfo,
        shopInfo
      })
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