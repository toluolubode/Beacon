import React from 'react';
import {Layout, Button} from 'antd';
import { Route} from 'react-router-dom';
import Logo from '../assets/beacon-logo.svg';
import MediaQuery from 'react-responsive';
const { Header } = Layout;


const headerStyle ={
  background: 'white',
  display:'flex',
  flex:'none',
  borderBottom: '1px solid rgb(223, 223, 223)',
  //  for mobile width:'fit-content'
}
const headerStylem ={
  background: 'white',
  display:'flex',
  flex:'none',
  borderBottom: '1px solid rgb(223, 223, 223)',
  width:'100%'
}
const logoStyle= {
  color:'black',
  flex:1,
  width: 120,
  height: 31,
  margin: '16 24 16 0',
  float: 'left',
  fontSize:20,
  fontWeight:500,
  whiteSpace:"nowrap"
}
const logoStylem= {
  color:'black',
  flex:1,
  width: 120,
  height: 31,
  margin: '16 24 16 0',
  float: 'left',
  fontSize:20,
  fontWeight:500,
  whiteSpace:"nowrap",
  marginRight: 30
}
const submitButtonStyle= {justifyContent:'flex-end'}

const HeaderSite = () => {
  return(
    <div>
      <MediaQuery minDeviceWidth={1024}>
        {(matches) => {
          if (matches) {
            return(
              <Header className="header" style={headerStyle}>
              <div className="logo" style={logoStyle}>
                <img src={Logo} alt="Ryerson University"/>
              </div>
              <div className="submit" style={submitButtonStyle}>
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
              <Header className="header" style={headerStylem}>
              <div className="logo" style={logoStylem}>
                <img src={Logo} alt="Ryerson University"/>
              </div>
              <div className="submit" style={submitButtonStyle}>
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
