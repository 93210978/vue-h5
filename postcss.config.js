/*
 * @Author: 陆伟
 * @Date: 2021-07-22 16:38:18
 * @LastEditTime: 2021-07-22 16:38:29
 * @LastEditors: 陆伟
 * @Description: 
 */
module.exports = {
  plugins: {
      autoprefixer: {
          overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
              "last 10 versions", // 所有主流浏览器最近10版本用
          ],
          grid: true,
      },
      'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*'],
          unitPrecision: 5
      }
  }
}