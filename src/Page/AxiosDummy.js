import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    const cookies = new Cookies();
    console.log(cookies.get('accessToken'));
    axios.get(process.env.REACT_APP_BACKEND_URL+`/api/object`,{
        headers: {
          authorization: cookies.get('accessToken')
        }
      }).then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}