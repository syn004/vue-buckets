import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://192.168.1.7:9090/api';

// 拦截器
axios.interceptors.request.use(config => {
    return config    
  }, error => {
    return Promise.reject(error)
  }
)

//添加响应拦截器
axios.interceptors.request.use(response => {
  return response
  }, error => {
    return Promise.reject(error)
  }
)

export function getList() {
  return axios.get('/article')
}
