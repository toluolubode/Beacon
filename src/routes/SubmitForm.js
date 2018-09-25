import React, { Component } from 'react';
import {Input, Button} from 'antd';
import firebase from '../firebase.js';
import HeaderNoBtn from '../components/HeaderNoBtn.js';

const systemfont= '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol';

const { TextArea } = Input;

const formStyle = {
    width: '40%',
    margin: '40px auto',
    maxWidth: 480,
    padding: 40,
    borderRadius: 10,
    background: 'gray',
    fontFamily: systemfont,
    color:'white'
}

const formTitleStyle = {
  fontWeight: 600,
  marginBottom: 20,
}

const formGroup ={
  margin: '0 0 10px'
}

class SubmitForm extends Component{
  constructor() {
    super();
    this.state = {
      studentorg: '',
      email: '',
      website:'',
      description:''
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
    website: this.state.website,
    description: this.state.description
  });
  this.setState({
    studentorg: '',
    email: '',
    website:'',
    description: ''
  });
};

  render() {
    return (
      <div>
        <HeaderNoBtn />
        <div>
          <div>
            <div><h3>Submit your student organisation</h3></div>
            <div>Someone the beacon team will reach out to make sure all the info is okay</div>
          </div>
          <form style={formStyle}>
            <div style={formTitleStyle}> Submit your student organisation</div>
            <div style={formGroup}>
              <label>Organisation name </label>
              <Input
                type="text"
                name="studentorg"
                placeholder="Student organisation"
                onChange={this.updateInput}
                value={this.state.studentorg}
              />
            </div>
            <div style={formGroup}>
              <label>Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.updateInput}
                  value={this.state.email}
                />
            </div>
            <div style = {formGroup}>
              <label>Website</label>
                <Input
                  type="url"
                  name="website"
                  placeholder="Website"
                  onChange={this.updateInput}
                  value={this.state.website}
                />
            </div>
            <div style = {formGroup}>
              <label>Description</label>
              <TextArea
                type ="text"
                name="description"
                placeholder = "Description"
                value = {this.state.description}
                onChange={this.updateInput}/>
            </div>
          <Button type="primary" onClick={this.addUser}>Submit</Button>
          </form>
        </div>

      </div>
        );
      }
   }
export default SubmitForm;
