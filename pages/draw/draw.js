/*
 * @Description: 
 * @Version: 
 * @Autor: guowenhuan
 * @Date: 2020-11-19 08:21:57
 * @LastEditors: guowenhuan
 * @LastEditTime: 2020-11-19 14:55:03
 */
// pages/draw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '郭豆豆',
        age: 2,
        sex: '男',
        flag: true,
        txt: '显示',
        arr: [{
            id: 1,
            name: '郭文环'
        }, {
            id: 2,
            name: '宋艳清'
        }, {
            id: 3,
            name: '郭佳琪'
        }]
    },
    changeInput(event) {
        console.log(event);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})