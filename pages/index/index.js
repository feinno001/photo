/*
 * @Description: 
 * @Version: 
 * @Autor: guowenhuan
 * @Date: 2020-11-18 18:55:09
 * @LastEditors: guowenhuan
 * @LastEditTime: 2020-11-19 08:48:32
 */
// pages/index/index.js
//获取APP()实例
const appInst = getApp();

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
    onTap: function() {
        this.setData({
            age: this.data.age + 1
        });
    },
    onTap1: function() {
        this.setData({
            flag: !this.data.flag,
            txt: !this.data.flag ? '显示' : '隐藏'
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("加载中~" + appInst.globalData);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log("监听页面初次渲染完成~");
        appInst.dclick();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log("监听页面显示~");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log("监听页面隐藏~");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log("监听页面卸载~");
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
        console.log("分享+1~");
    }
})