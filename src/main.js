import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式表
import './styles/indes.less'
// 引入vant，方式三， 练习使用这种方式
import Vant from 'vant'
import 'vant/lib/index.css'
// 自动设置REM基准值（html标签字体大小）
import 'amfe-flexible'

// 全局注册vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
