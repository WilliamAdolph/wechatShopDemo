// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone_number: '',
    code: '',
  },

  getPhone(e) {
    if(!(/^1[3456789]\d{9}$/.test(e.detail.value))) {
      wx.showToast ({
        title: '手机号输入不正确',
        icon: 'none',
        duration: 1000
      })
      setTimeout(()=> { wx.hideToast(); },1000)
    } else {
      this.setData({
        phone_number: e.detail.value
      })
    }
  },
  getCode(e) {
    this.setData({
      code: e.detail.value
    })
  },
  login() {
    wx.request({
      url: 'http://www.hengyishun.cn/login/login',
      data: ({
        phone: this.data.phone_number,
        code: this.data.code
      }),
      success(res) {
        console.log(res,'登录成功');
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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