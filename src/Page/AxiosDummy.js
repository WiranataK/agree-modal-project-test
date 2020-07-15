import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';

function iniData(){
  let cookies = new Cookies();
  let token = cookies.get('accessToken');
  console.log(token)
  const AuthStr = 'Bearer '.concat(token); 
  axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievepartner', { headers: { Authorization: AuthStr } })
   .then(response => {
      // If request is good...
     console.log(response.data);
   })
   .catch((error) => {
      console.log('error ' + error);
   });
};

class AxiosDummy extends React.Component {
    render(){
      return(
        <React.Fragment>
          <button onClick={iniData}>Lihat Data</button>
        </React.Fragment>
      );
  }
}
export default withRouter(AxiosDummy); // <--- make sure to wrap your component with `withRouter()`