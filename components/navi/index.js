// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      if(!this.properties.latest){
        this.triggerEvent(
          // 事件名称
          'left', {
            // 自定义属性
          }, {
            // 触发事件选项
          })
      }
      
    },
    onRight:function(event){
      if (!this.properties.first) {
        this.triggerEvent(
          // 事件名称
          'right', {
            // 自定义属性
          }, {
            // 触发事件选项
          })
      }
      
    }
  }
})
