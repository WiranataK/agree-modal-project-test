import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function TokenInvalidError () {}

TokenInvalidError.prototype = new Error();

export default function Check_Token() {
		try{
			const cookies = new Cookies();
			const backendUrl = process.env.REACT_APP_BACKEND_URL;

			var accessToken = cookies.get('accessToken')
			if(!accessToken){
					throw new TokenInvalidError;
			}

			axios.post(backendUrl+`/token/verify/`, {token: "accessToken"
					}).then(res => {
					}).catch(error => {

							var refreshToken = cookies.get('refreshToken')
							if(!refreshToken){
									throw new TokenInvalidError;
							}

							axios.post(backendUrl+`/token/refresh/`, {refresh: refreshToken
									})
									.then(res => {
											cookies.set('accessToken', res.data.access, { path: '/', maxAge: 2*60*60});
									})
									.catch(error => {
											throw new TokenInvalidError;
									});
					});
		} catch (e) {
		  if (e instanceof TokenInvalidError) {
				return <Redirect to='/' />
		  } else {
		    console.log(e);
		  }
		}
		return (null)
}
