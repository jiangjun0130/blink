let classicBeh = Behavior({
  behaviors: [],

  /**
   * 子Component会覆盖Behavior中的properties
   */
  properties: {
    img: String,
    content: String,
    hidden: Boolean
  },

  /**
   * 子Component会覆盖Behavior中的data
   */
  data: {

  },

  /**
   * 不会覆盖Behavior的attached，会依次调用
   */
  attached: function () {

  },

  methods: {

  }
})

export { classicBeh }