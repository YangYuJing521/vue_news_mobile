/**
 * 项目中的数据请求
*/

import axios from 'axios'
// 创建请求对象
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

// 请求拦截器

// 响应拦截器

// 导出
export default request
