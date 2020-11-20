/*
 * @Description: 
 * @Version: 
 * @Autor: guowenhuan
 * @Date: 2020-11-19 15:31:09
 * @LastEditors: guowenhuan
 * @LastEditTime: 2020-11-20 07:55:50
 */
Page({
    data: {
        //纬度
        latitude: 34.11215000000002,
        //经度
        longitude: 118.80406000000002,
        //标记点
        markers: [{
            //标记点 id
            id: 1,
            //标记点纬度
            latitude: 34.11215000000002,
            //标记点经度
            longitude: 118.80406000000002,
            name: '当前的位置'
        }],
        circles: [{
            latitude: 34.11215000000002,
            longitude: 118.80406000000002,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 800
        }]
    },
    onReady: function(e) {
        //获取map上下文
        //参数：
        //string mapId
        //Object this
        this.mapCtx = wx.createMapContext('myMap')
    },
    //获取当前位置经纬度，并把定位到相应的位置
    getCenterLocation: function() {
        //获取当前位置：经纬度
        this.mapCtx.getCenterLocation({
            success: res => {
                //获取成功后定位到相应位置
                console.log(res);

                //参数对象中设置经纬度，我这里设置为获取当前位置得到的经纬度值
                this.mapCtx.moveToLocation({
                    longitude: res.longitude,
                    latitude: res.latitude
                })
            }
        })
    },
    //移动标记（marker）到指定位置
    translateMarker: function() {
        //平移marker
        this.mapCtx.translateMarker({
            //要平移的marker的id
            markerId: 1,
            //移动过程中是否自动旋转 marker
            autoRotate: true,
            //动画持续时长，平移与旋转分别计算
            duration: 1000,
            //平移到的目的地，参数为经纬度
            destination: {
                latitude: 33,
                longitude: 113.3345211,
            },
            //平移动画后的回调函数
            animationEnd() {
                console.log('动画结束')
            }
        })
    },
    //缩放视野展示所有经纬度
    includePoints: function() {
        this.mapCtx.includePoints({
            //坐标点形成的矩形边缘到地图边缘的距离，单位像素。
            padding: [10],
            //有哪些要缩放的点
            points: [{
                latitude: 23.10229,
                longitude: 113.3345211,
            }, {
                latitude: 24.00229,
                longitude: 113.545211,
            }],
            success: res => {
                console.log("缩放成功")
            }
        })
    },
    //获取当前位置视野范围
    getRegion: function() {
        this.mapCtx.getRegion({
            success: res => {
                //东北角经纬度
                console.log(res.northeast);
                //西南角经纬度
                console.log(res.southwest);
            }
        })
    }
})