// components/w-tabControll/w-tabControll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      const data = {index: e.currentTarget.dataset.index}
      this.triggerEvent("itemClick", data, {})
      this.setData({
        currentIndex: data.index
      })
    }
  }
})
