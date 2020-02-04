// pages/cart/childComps/cart-list-item/cart-list-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //勾选按钮点击
    onCheckClick(e){
      //获取对应商品下标
      const index = e.currentTarget.dataset.index
      //获取勾选事件的商品对象
      const goods = app.globalData.cartList.find(item => item.iid == this.properties.goods.iid)
      //改变商品选中状态
      goods.checked = !goods.checked
      //回调函数 实时更新主页数据
      app.changeGoodsState(index, goods)
    }
  }
})
