const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  goClassLib: function () {
    wx.redirectTo({
      url: './../demo/classLib',
    })
  },
  goExportLib: function () {
    wx.redirectTo({
      url: './../demo/exportLib',
    })
  },
  goExportLib1: function () {
    wx.redirectTo({
      url: './../demo/exportLib1',
    })
  }
})
