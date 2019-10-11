'use strict';
const env = 'dev';
const defaultAlertMessage = "你有问题";
const defaultShareText = {
  en:'ikcamp英语学习口语听力四六级'
}

const defaultBarTitle = {
  en:'ikcamp英语学习口语听力四六级'
}

const defaultImg = {
  articleImg:"https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png",
  coverImg:'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}
let core = {
  env: env,
  defaultAlertMessage: defaultAlertMessage,
  defaultImg: defaultImg,
  defaultShareText: defaultShareText['en'],
  isDev:env==='dev',
  isProduction: env ==='production'
}

export default core 
 