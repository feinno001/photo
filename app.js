/*
 * @Description: 
 * @Version: 
 * @Autor: guowenhuan
 * @Date: 2020-11-18 10:12:10
 * @LastEditors: guowenhuan
 * @LastEditTime: 2020-11-19 07:46:52
 */
App({

    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function() {
        console.log("初始化完成~只触发一次~" + this.object.info);
    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function(options) {
        console.log("从后台进入前台显示~");
    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function() {
        console.log("从前台进入后台~");
    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function(msg) {

    },
    /**
     * 自定义全局变量
     */
    object: {
        info: "全局方法~"
    },
    globalData: 'I am global data',
    dclick: function() {
        console.log("点击了");
    }
})