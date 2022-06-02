// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco: "#000000",
    secco: "#979797",
    imgUrls: [
      'http://i0.hdslb.com/bfs/archive/9bab17a99758cc7a72531d15d2d5a85d73b78ded.jpg',
      'http://i0.hdslb.com/bfs/archive/57d8001838ff81c64bef2682070e53efbe2736b7.jpg',
      'http://i0.hdslb.com/bfs/archive/499730dbcd76823664c48e661726a37164158795.jpg',
      'http://i0.hdslb.com/bfs/archive/c9682eac8f46fd2b261b739c5c88e21adaffab53.jpg',
      'http://i0.hdslb.com/bfs/archive/414cf391f88bb098ded766b1d7effd9216be34ef.jpg'
    ],
    interval: 5000,
    duration: 1000,
    hotList: [
      {
        coverImg: 'http://i2.hdslb.com/bfs/archive/1239539a2f262d933bca7c2c1e290139420ba76a.jpg_320x200.jpg',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av1'
      },
      {
        coverImg: 'http://i1.hdslb.com/bfs/archive/ecce95b426faf188e6c28f9d3a0bdc63c5a72bb3.jpg_320x200.jpg',
        title: '【斗图歌】装逼不如斗图',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av2'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/11bf8d41fffcad31976317760e301e2db64be8c8.png_320x200.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av3'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/e73a92b0ed615b4d6568888906d09f84d0835674.jpg_320x200.jpg',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av4'
      }
    ],
    list: [{
        face_url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=447979932,3108003765&fm=26&gp=0.jpg",
        username: "哆啦B梦",
        send_timestamp: "2019-7-6 14:42",
        centent: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 2,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562409664468&di=da6c500dd77003e15ccf360c979ce2cb&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201408%2F05%2F20140805182358_CckFB.thumb.700_0.png",
        username: "哆啦C梦",
        send_timestamp: "2019-8-6 15:14",
        centent: "阅读，是一次心灵的艺术之旅。",
        total_likes: 6,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562409732760&di=38f8a56fcbb4d2a6434f0e75df73db7b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201504%2F02%2F20150402H1413_nRNyd.jpeg",
        username: "天线宝宝",
        send_timestamp: "2019-8-8 14:42",
        centent: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 9,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563004541&di=0012d0c0ee52206b1e5dd617467e9f46&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201507%2F08%2F20150708123847_cXsx3.jpeg",
        username: "皮卡丘",
        send_timestamp: "2019-1d-6 14:42",
        centent: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 11,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562409664468&di=da6c500dd77003e15ccf360c979ce2cb&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201408%2F05%2F20140805182358_CckFB.thumb.700_0.png",
        username: "哆啦C梦",
        send_timestamp: "2019-8-6 15:14",
        centent: "阅读，是一次心灵的艺术之旅。",
        total_likes: 6,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562409732760&di=38f8a56fcbb4d2a6434f0e75df73db7b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201504%2F02%2F20150402H1413_nRNyd.jpeg",
        username: "天线宝宝",
        send_timestamp: "2019-8-8 14:42",
        centent: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 9,
      },
      {
        face_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563004541&di=0012d0c0ee52206b1e5dd617467e9f46&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201507%2F08%2F20150708123847_cXsx3.jpeg",
        username: "皮卡丘",
        send_timestamp: "2019-1d-6 14:42",
        centent: "阅读，是一次心灵的艺术之旅。前辈们留下了大量优秀的作品，通过这些传世之作给我们以启迪，教会我们如何感受世界。那些震撼心灵的好书往往意义深远，让人相逢恨晚。",
        total_likes: 11,
      }
    ]
  },

  first_select: function() {
    // wx.redirectTo({
    //   url: '../square/square'
    // })
  },

  second_select: function() {
    wx.navigateTo({
      url: '../commit/commit'
    })
  },

  third_select: function() {
    wx.redirectTo({
      url: '/pages/mine/mine'
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