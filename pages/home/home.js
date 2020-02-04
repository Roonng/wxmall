// pages/home/home.js
import { getMultiData, getGoodsData } from '../../service/home.js'
const TOP_DISTANCE = 1000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    title: ['流行','新款','精选'],
    goods: {
      'new': {page: 0 ,list: []},
      'pop': {page: 0 ,list: []},
      'sell': {page: 0 ,list: []}
    },
    currentType: 'pop',
    entitle: ['pop', 'new', 'sell'],
    isShowBackTop: false,
    isshowTabcon: false,
    tapconTop: 0,
    flag2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData()

    this. _getGoodsData('new')
    this. _getGoodsData('pop')
    this. _getGoodsData('sell')
  },

  //请求首页数据
  _getMultiData(){
    getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      this.setData({
        banners,
        recommends
      })
    })
  },
  //请求商品数据
  _getGoodsData(type){
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      const newlist = this.data.goods[type].list
      newlist.push(...res.data.data.list)
      
      const oldlist = `goods.${type}.list`
      const oldpage = `goods.${type}.page`
      this.setData({
        [oldlist]: newlist,
        [oldpage]: page
      })
    })
  },
 

  //tabControll点击
  tabconClick(e){
    const type = this.data.entitle[e.detail.index]
    this.setData({
      currentType: type
    })

  },

  //上拉加载更多
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },

  //点击返回顶部
  onPageScroll(options){
    const scrollTop = options.scrollTop;
    const flag = scrollTop >= TOP_DISTANCE
    if(this.data.isShowBackTop != flag){
      this.setData({
        isShowBackTop: flag,
      })
    }
    const flag2 = scrollTop >= this.data.tapconTop
    if(flag2 != this.data.flag2){
      this.setData({
        isshowTabcon: flag2,
        flag2: flag2,
      })
    }

   
  },
  //监听推荐图片加载完成
  handleImgLoad(){
    wx.createSelectorQuery().select(".tabcon2").boundingClientRect(react => {
      this.data.tapconTop = react.top
      this.setData({
        tapconTop: react.top
      })
    }).exec()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})