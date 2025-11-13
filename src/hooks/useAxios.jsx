import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://book-heaven-server-jade.vercel.app'
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;