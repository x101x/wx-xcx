# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

- AI 能力 由腾讯云提供
  小程序 云端能力 tcb 
  wx.cloud.callFunction
- 人像识别 需要AI能力 
  有经验  
- app.js 共享全局数据
  useinfo 应用配置
  高于page 被所有的page共享
- useinfo 
  <button open-type="getUserInfo"/>
  第一次询问用户授权
  微信 开发者第三方 用户
  bind

- 多页面 共享部分界面
  -如果是独立组件
  useingComponents
  - 比较简单 没什么业务逻辑 template 不要重复