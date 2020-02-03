// pages/category/category.js
import { 
  getCategory,
  getSubcategory 
} from '../../service/category'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    contentList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory()
    
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
  
  //获取左边导航栏项
  _getCategory(){
    getCategory().then(res => {
      const list = res.data.data.category.list
      const initmaitKey = list[0].maitKey
      const initConList = this._getSubcategory(initmaitKey)
      console.log(list)
      this.setData({
        navList: list,
        contentList: initConList
      })
    })
  },

  //左边导航栏点击函数
  navItemClick(e){
    const maitKey = e.detail.maitKey
    this._getSubcategory(maitKey)
  },

  //通过maitKey获取内容数据
  _getSubcategory(maitKey){
    getSubcategory(maitKey).then(res => {
      const list = res.data.data.list
      console.log(list)
      this.setData({
        contentList: list
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