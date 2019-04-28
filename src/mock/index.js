import Mock from 'mockjs'
import { login } from './login'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

// Mock.mock(/\/login/, login) // 可以使用mock 拦截 并配合+ / mock/login.js 返回结果   第二种：直接使用easymock 方法

export default Mock
