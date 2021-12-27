import axios from 'axios';
import { API_URL } from "../constants"

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Access-Control_Allow-Origin": "*"
    },
    timeout: 10000
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            let token = localStorage.getItem('authorizedToken')
            if (token) {
                return new Promise(function (resolve, reject) {
                    originalRequest.headers["Authorization"] = `Bearer ${token}`
                    resolve(axios(originalRequest))
                })
            }
        }

        return Promise.reject(error)
    }
)

const initAxios = () => {}

const setAxiosToken = (token) => {}

const removeAxiosToken = () => {}

const processError = (err) => {}

const responseBody = (res) => res.data

const Repository = {
    get: (url, params = {}) =>
        axiosInstance.get(url, { params: params })
            .then(responseBody)
            .catch(processError),
    post: (url, data) =>
        axiosInstance.post(url, data)
            .then(responseBody)
            .catch(processError),
    put: (url, data) =>
        axiosInstance.put(url, data)
            .then(responseBody)
            .catch(processError),
    delete: (url) =>
        axiosInstance.delete(url, data)
            .then(responseBody)
            .catch(processError),
    postWithFile: (url, data) =>
        axiosInstance
            .post(url, data, { headers: { "Content-Type": "multipart/form-data" } })
            .then(responseBody),
}

export {
    initAxios,
    setAxiosToken,
    removeAxiosToken
}

export default Repository