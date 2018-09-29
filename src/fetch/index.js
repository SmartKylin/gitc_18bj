import 'whatwg-fetch'
import 'es6-promise'
import cookie from 'react-cookies' 

const formatUrlencoded = obj => {
    let arr = [];
    for(let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join('&');
};
const formatUrlencoded2 = obj => {
  var objData = {};

  for(var key in obj){
    objData[key] = obj[key]    
    }   
  return JSON.stringify(objData);
}

export const get = url => {
  return fetch(url, {
    method:'GET',
    Accept: 'application/json',
    // 设置请求可以跨域发送cookie
    //credentials: 'include',
    mode: 'cors',
    cache: 'default'
  })
}

export const post = (url, obj) => {
    return fetch(url, {
        method: "POST",
        // a=1&b=2&c=3
        mode: 'cors',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Cookie': `gitc=${}`
        },
        body: formatUrlencoded2(obj)
    })
};


export default {
  post,
  get
}
