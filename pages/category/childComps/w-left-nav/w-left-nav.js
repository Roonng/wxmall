// pages/category/childComps/w-left-nav/w-left-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList: {
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
      const index = e.currentTarget.dataset.index
      const maitKey = e.currentTarget.dataset.maitkey
      this.triggerEvent('navItemClick',{ maitKey })
      this.setData({
        currentIndex: index
      })
    }
  }
})
