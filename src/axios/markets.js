import axiosInstance from "./axios";

export function getMarketsApi(){
    return axiosInstance.get('peatio/public/markets')
}