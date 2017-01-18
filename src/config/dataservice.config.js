import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `http://dev.api.allcal.com`,
    headers: {
        'Accept': `application/json`,
        'Content-Type': `application/json`
    }
})

axiosInstance.interceptors.response.use((config) => {
    return config.data
        }, (error) => {
            return Promise.reject(error)
        })

export const setEmailHeader = email => {
    //axiosInstance.defaults.headers.common['X-Employee-Email'] = email
}

export const setHeaders = (authToken = '') => {
    if (!authToken) {
        authToken = ''
    }
    axiosInstance.defaults.headers.common['login-token'] = authToken
}

export const clearHeaders = () => {
    //axiosInstance.defaults.headers.common['X-Employee-Token'] = ''
    //axiosInstance.defaults.headers.common['X-Employee-Email'] = ''
}

export default axiosInstance
