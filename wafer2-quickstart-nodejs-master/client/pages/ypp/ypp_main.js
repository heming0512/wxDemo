var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    // userInfo: {},
    takeSession: false,
    requestResult: '',
    titlename:null
  },

  doMian: function () {
  var that = this

          util.showSuccess('Success')
          console.log(res)
          
  },
  onLoad:function(options){
   
    wx.showToast({
      title: 'loading',
    });
    console.log("123",options);
    
    this.setData({
      titlename: options.titlename
      
    })
    console.log("123", titlename);
   
  }
})