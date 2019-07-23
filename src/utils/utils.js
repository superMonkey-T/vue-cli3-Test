// let httpRequest:any;
// httpRequest.getData = function (src:any,params:any) {
//   return new Promise((resolve,reject)=>{
//     this.$axios.get(src)
//     .then((res:any)=>{
//       resolve(res)
//     }).catch((err:any)=>{
//       reject(err)
//     })
//   })
// }
import axios from 'axios'

// export default httpRequest;
let httpRequest = {};
httpRequest.getData = function (src, params) {
  console.log('src=' + params.openid)
  return new Promise((resolve, reject) => {
    axios({url: src,data: {'openid': params.openid}})
    .then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}


export default httpRequest;
