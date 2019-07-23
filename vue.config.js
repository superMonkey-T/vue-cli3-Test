// module.exports = {
//   // 修改的配置
//   // 将baseUrl: '/api',改为baseUrl: '/',
//   baseUrl: '/app',
//   devServer: {
//     port: "8080", //代理端口
//     open: false, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
//     proxy: {
//       '/app': {
//         target: 'http://www.baidu.com',
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//           '/^app': ''
//         }
//       }
//     },
//   }
// }
