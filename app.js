//app.js
App({
  onLaunch: function () {
  },
  addToCart(obj){
    const prod = this.globalData.cartList.find(item =>  item.iid == obj.iid)
    console.log("prod:",prod)
    const cartList = this.globalData.cartList
    if(prod){
      prod.count += 1
    }else{
      obj.checked = true
      cartList.push(obj)
    }

    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    cartList: []
  }
})