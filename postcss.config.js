/**
 *  PostCss配置文件
 *  PostCss 是基于node.js运行的一个处理 css的工具
*/

// PostCss配置文件需要导出一个对象
module.exports = {
  // 配置要使用的插件
  plugins: {
    // 添加浏览器厂商前缀 适配不同浏览器
    // VUE CLI 默认集成autoprefixer这里就不用再配置了
    // autoprefixer: {
    // 兼容（浏览器）环境， 项目中.browserslistrc文件来配置的， 这里打开会有警告
    // 这俩参数配置到browserslistrc文件
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 把 px 转为 rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下按照你的设计稿来
      // 750 宽的设计稿，750 / 10 = 75
      // 375 宽的设计稿，375 / 10 = 37.5
      // Vant 组件库是基于逻辑像素37.5写的
      // 移动端页面一般都是以 iphone 6/7/8 为原型设计的
      // Vant 组件库是基于逻辑像素 375 写的
      // 设计稿都是基于物理像素 750 宽设计的
      // 所以如果设置成 75，那么我们就可以在设计稿中测量多少就写多少，但是 Vant 的样式就会变得很小，小了一半
      // 所以我们还必须设置成 37.5，但是在测量我们的设计稿的时候我们必须让你的测量单位 / 2
      // 有没有更好的办法：不用计算
      rootValue: 37.5,

      // 需要转换的 CSS 属性，* 就是所有属性都要转换
      propList: ['*']
    }
  }
}
