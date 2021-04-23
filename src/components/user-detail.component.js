import React, { Component } from 'react';
import axios from 'axios';

export default class userDetails extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeMobileno= this.onChangeMobileno.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        Mobileno: ''
      }
    }
  

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onChangeMobileno(e) {
      this.setState({
        Mobileno: e.target.value
      })
    }
  
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        Mobileno: this.state.Mobileno,
      }
  
      console.log(user);
      
      axios.post('http://localhost:5000/users/add', user)
       .then(res=> {
         console.log(res.data)
        })
       .catch(error => {
        console.log(error.response)
       });
       axios.post('http://localhost:5000/users/get', user)
       .then(res=> {
         console.log(res.data)
        })

       

      this.setState({
        username: '',
        Mobileno: ''
      })

    }

render() {
    return (
    <div>
      <h3>User Detail</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}/>
              
        </div>
        <div className="form-group"> 
          <label>MobileNo: </label>
          <input  type="integer"
              required
              className="form-control"
              value={this.state.Mobileno}
              onChange={this.onChangeMobileno}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add detail" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
