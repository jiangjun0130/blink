// components/like/index.js
Component({
  /**
   * 组件的属性列表
   * 开放出去的数据需要写到【properties】中
   * 
   * 注意：在 properties 定义段中，属性名采用驼峰写法（propertyName）；在 wxml 中，指定属性值时则对应使用连字符写法（component-tag-name property-name="attr value"），应用于数据绑定时采用驼峰写法（attr="{{propertyName}}"）。
   */
  properties: {
    like: {
      type: Boolean,
      value: false, // Boolean默认为false
      observer: function(){
      }
    },
    count: {
      type: Number, // 默认值：0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: "images/like.png",
    notLikeSrc: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1
      this.setData({
        count: count,
        like: !like
      })
      // 激活自定义事件
      let behavior = this.properties.like?"like":"cancel"
      this.triggerEvent(
        // 事件名称
        'like', {
        // 自定义属性
          behavior: behavior
      }, {
        // 触发事件选项
      })
    }
  }
})
