// pages/detail/detail.js
import { getDetail,GoodsBaseInfo,ShopInfo } from "../../service/detail"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImages: [],
    baseInfo: {},
    shopInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const iid = options.iid
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