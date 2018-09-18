import React from 'react';
import {Layout, Button} from 'antd';
import { Route} from 'react-router-dom';
const { Header } = Layout;

const headerStyle ={
  background: 'white',
  display:'flex',
  flex:'none',
  borderBottom: '1px solid rgb(223, 223, 223)',
}
const logoStyle= {
  color:'black',
  fontFamily:'Work Sans',
  flex:1,
  width: 120,
  height: 31,
  margin: '16 24 16 0',
  float: 'left',
  fontSize:20,
  fontWeight:500,
  whiteSpace:"nowrap"
}
const submitButtonStyle= {justifyContent:'flex-end'}

const HeaderSite = () => {
  return(
    <Header className="header" style={headerStyle}>
      <div className="logo" style={logoStyle}>
        beacon <span role='img' aria-labelledby="school">💡</span>
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
  )
}

export default HeaderSite;
