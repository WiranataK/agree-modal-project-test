import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Check_Token() {
	const cookies = new Cookies();
	var accessToken = cookies.get('accessToken')
	if(!accessToken){
		console.log("token empty");
		return <Redirect to='/' />
	}
	console.log(accessToken);
	axios.post(process.env.REACT_APP_BACKEND_URL+`/token/verify/`, {
			token: accessToken
		})
		.then(res => {
			console.log("success");
			return (true);
		})
		.catch(error => {
				console.log("invalid accessToken");
				var refreshToken = cookies.get('refreshToken')
				if(!refreshToken){
					console.log("token empty");
					return <Redirect to='/' />
				}
				console.log(refreshToken);
				axios.post(process.env.REACT_APP_BACKEND_URL+`/token/refresh/`, {
						refresh: refreshToken
					})
					.then(res => {
	          cookies.set('accessToken', res.data.access, { path: '/', maxAge: 2*60*60});
						console.log("success");
						return (null);
					})
					.catch(error => {
							console.log("invalid accessToken");
							var output = <Redirect to='/' />
							return output;
					});
		});
		return (null)
}
