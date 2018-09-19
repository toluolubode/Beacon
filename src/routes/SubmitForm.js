import React, { Component } from 'react';
import {Input, Button} from 'antd';
import firebase from '../firebase.js';
import HeaderNoBtn from '../components/HeaderNoBtn.js';


class SubmitForm extends Component{
  constructor() {
    super();
    this.state = {
      studentorg: '',
      email: '',
      abbreviation:''
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
    studentorg: this.state.studentorg,
    email: this.state.email,
    abbreviation: this.state.abbreviation
  });
  this.setState({
    studentorg: '',
    email: '',
    abbreviation:''
  });
};

  render() {
    return (
      <div>
        <HeaderNoBtn />
        <div>
          <form>
            <Input
              type="text"
              name="studentorg"
              placeholder="Student organisation"
              onChange={this.updateInput}
              value={this.state.studentorg}
            />
            <Input
              type="name"
              name="abbreviation"
              placeholder="Abbreviation"
              onChange={this.updateInput}
              value={this.state.abbreviation}
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
        </div>

      </div>
        );
      }
   }
export default SubmitForm;
