import axios, { AxiosError } from "axios";
import { showLoading, hideLoading } from "./loading";
import storage from "./storage";
import env from "@/config";
import { Result } from "@/types/api";
import { message } from "./AntdGlobal";

// 创建实例
const instance = axios.create({
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

//请求拦截器a
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if(token) {
      config.headers.Authorization = "Token::" + token
    }
    config.headers.icode = "2012DB456283497B"
    if(env.mock) {
      config.baseURL = env.mockApi
    } else {
      config.baseURL = env.baseApi
    }

    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

//响应拦截器
instance.interceptors.response.use(
  response => {
    const data: Result = response.data
    hideLoading()
    // 登录失效
    if(data.code === 500001) {
      message.error(data.msg)
      storage.remove('token')
      // location.href = '/login'
    } else if (data.code !== 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  (error) => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, {params})
  },

  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params)
  }
}
