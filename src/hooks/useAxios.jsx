import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://book-heaven-server-rho.vercel.app'
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;