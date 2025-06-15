import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { getMessageInfo } from './status'

interface BaseResponse<T> {
  code: number | string;
  data: T;
  message: string;
  status?: number | string;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    let { status, data } = response
    if (status === 200) {
      return data
    }
    ElMessage({
      message: getMessageInfo(status),
      type: 'error'
    })
    return data
  },
  (error: any) => {
    const { response } = error
    if (response) {
      ElMessage({
        message: getMessageInfo(response.status),
        type: 'error'
      })
      return Promise.reject(response.data)
    }
      ElMessage({
        message: '网络连接异常，请稍后再试。',
        type: 'error'
      })
  }
)
// 此处是二次响应拦截 为响应数据做定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config
  return new Promise((resolve, reject) => { 
    service.request<any, AxiosResponse<BaseResponse<T>>>(conf).then((res: AxiosResponse<BaseResponse<T>>) => { 
      const data = res.data;
      if (data.code !== 0) {
        ElMessage.error({
          message: data.message,
          type: 'error'
        })
        reject(data.message)
      } else {
        ElMessage.error({
          message: data.message,
          type: 'success'
        })
        resolve(data.data as T)
      }
    }).catch(err => {

      reject(err)
    })
  })
}

export function get<T, U>(config: AxiosRequestConfig, url: string, params?: U): Promise<T> {
  return requestInstance({...config, url, method: 'GET', params})
}
export function post<T, U>(config: AxiosRequestConfig, url: string, data?: U): Promise<T> {
  return requestInstance({...config, url, method: 'POST', data})
}
export function put<T, U>(config: AxiosRequestConfig, url: string, params?: U): Promise<T> {
  return requestInstance({...config, url, method: 'PUT', params})
}
export function del<T, U>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
  return requestInstance({...config, url, method: 'DELETE', data})
}

export default service