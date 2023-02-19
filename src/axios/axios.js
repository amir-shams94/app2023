import axios from 'axios'
// import Cookies from 'js-cookie';
axios.defaults.credentials = true;


const axiosInstance = axios.create({
  baseURL: 'https://trade.radin.io/api/v2/',
  
  headers: {
    'Content-type': 'application/json',
  },

  //   xhrFields: { withCredentials: true },
  // crossDomain: true,
})

// axios.interceptors.request.use(config => {
//   const token = Cookies.get('_barong_session');
//     if (token) {
//         console.log(token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     // config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     console.log(config);
//   return config;
// });
export default axiosInstance
