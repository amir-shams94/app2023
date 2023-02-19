import axiosInstance from "./axios";


export function getMeApi(){
    return axiosInstance.get('barong/resource/users/me')
}