import React from 'react';
import {Layout} from 'antd'
import Logo from '../assets/beacon-logo.svg';
const { Header } = Layout;

const headerStyle ={
  background: 'white',
  display:'flex',
  flex:'none',
  borderBottom: '1px solid rgb(223, 223, 223)',
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

const HeaderNoBtn = () => {
  return(
    <Header className="header" style={headerStyle}>
      <div className="logo" style={logoStyle}>
        <img src={Logo} alt="Ryerson University"/>
      </div>
    </Header>
  )
}

export default HeaderNoBtn;
