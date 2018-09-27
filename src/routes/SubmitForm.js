import React, { Component } from 'react';
import {Input, Button} from 'antd';
import firebase from '../firebase.js';
import HeaderNoBtn from '../components/HeaderNoBtn.js';
import styles from '../styles/FormStyles.css';

const { TextArea } = Input;

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
          <div className={styles.formHeader}>
            <div><h3>Submit your student organisation</h3></div>
            <div>Someone the beacon team will reach out to make sure all the info is okay</div>
          </div>
          <form className={styles.formStyle}>
            <div className={styles.formTitleStyle}> Submit your student organisation</div>
            <div className={styles.formGroup}>
              <label>Organisation name </label>
              <Input
                type="text"
                name="studentorg"
                placeholder="Student organisation"
                onChange={this.updateInput}
                value={this.state.studentorg}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.updateInput}
                  value={this.state.email}
                />
            </div>
            <div className={styles.formGroup}>
              <label>Website</label>
                <Input
                  type="url"
                  name="website"
                  placeholder="Website"
                  onChange={this.updateInput}
                  value={this.state.website}
                />
            </div>
            <div className={styles.formGroup}>
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
