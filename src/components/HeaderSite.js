import React from 'react';
import {Layout, Button} from 'antd';
import { Route} from 'react-router-dom';
import Logo from '../assets/beacon-logo.svg';
import MediaQuery from 'react-responsive';
import styles from '../styles/HeaderSiteStyle.css';
const { Header } = Layout;

const HeaderSite = () => {
  return(
    <div>
      <MediaQuery minDeviceWidth={1024}>
        {(matches) => {
          if (matches) {
            return(
              <Header className={styles.headerStyle} style={{backgroundColor:'white'}}>
              <div className={styles.logoStyle}>
                <img src={Logo} alt="Ryerson University"/>
              </div>
              <div className={styles.submitButtonStyle}>
                <Route render={({ history}) => (
                  <Button
                    type='primary'
                    onClick={() => { history.push('/submit') }}
                    >
                    Submit a student organisation <span role='img' aria-labelledby='memo'>📝</span>
                  </Button>
              )} />
              </div>
            </Header>
          );
          } else {
            return (
              <Header className={styles.headerStylem} style={{backgroundColor:'white'}}>
              <div className={styles.logoStylem}>
                <img src={Logo} alt="Ryerson University"/>
              </div>
              <div className={styles.submitButtonStyle}>
                <Route render={({ history}) => (
                  <Button
                    type='primary'
                    size='default'
                    onClick={() => { history.push('/submit') }}
                    >
                    Submit <span role='img' aria-labelledby='memo'>📝</span>
                  </Button>
              )} />
              </div>
            </Header>
            );
          }
        }}
      </MediaQuery>
    </div>

  )
}

export default HeaderSite;
