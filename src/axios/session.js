import axiosInstance from "./axios";
// import Cookies from 'js-cookie';

export function postSession(email,password){
    return axiosInstance.post('barong/identity/sessions', {
        email, password
    })


}