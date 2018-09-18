import React, { Component } from 'react';
import {Input, Button} from 'antd';
import firebase from '../firebase.js';


class SubmitForm extends Component{
  constructor() {
    super();
    this.state = {
     email: '',
     fullname: ''
    };
  }

  updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}
addUser = e => {
  e.preventDefault();
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection('users').add({
    fullname: this.state.fullname,
    email: this.state.email
  });
  this.setState({
    fullname: '',
    email: ''
  });
};

  render() {
    return (
        <form>
          <Input
            type="text"
            name="fullname"
            placeholder="Student organisation"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
        <Button type="primary" onClick={this.addUser}>Submit</Button>
        </form>
        );
      }
   }
export default SubmitForm;
