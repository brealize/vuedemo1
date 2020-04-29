import axios from "axios"

axios.defaults.baseURL = "http://brealize.com";

// 拦截请求和响应
 // 添加拦截请求
 axios.interceptors.request.use(function (config) {
     // 在请求发出之前对请求进行更改
	 // console.log("当前请求的配置为",config);
	 // let token = jsCookie.get("token")
	 // if(token){
		//  config.headers.Authorization = `Bear ${token}`
	 // }
	 // console.log("预处理之后的配置为",config);
     return config;
   }, function (error) {
     // Do something with request error
     return Promise.reject(error);
   });
 
 // 添加拦截响应
 axios.interceptors.response.use(function (response) {
     // Do something with response data
	 // console.log("拦截到响应",response);
	 // if(response.status==200){
		//  return response
	 // }
     return response;
   }, function (error) {
     // Do something with response error
     return Promise.reject(error);
   });

import "./mockdata.js"

import jsCookie from 'js-cookie'

let searchAPI = (data)=>{
	return axios.post("/search.php",data);
}

let detailAPI = (data)=>{
	return axios.post("/detail.php",{
		params:{
			id:data.id
		}
	})
}

let loginAPI = (data)=>{
	return axios.post("/login.php",data)
}

let sendsmsAPI = (data)=>{
	return axios.post("/sms.php",data)
}

let registAPI = (data)=>{
	return axios.post("/regist.php",data)
}

let getUserInfoAPI = ()=>{
	return axios.get("/userinfo.php")
}

let modifyUserInfoAPI = ()=>{
	return axios.get("/userinfo.php")
}

export {
	searchAPI,
	detailAPI,
	loginAPI,
	sendsmsAPI,
	registAPI,
	getUserInfoAPI,
	modifyUserInfoAPI
}