import React from 'react';
import {Layout} from 'antd'
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

const HeaderNoBtn = () => {
  return(
    <Header className="header" style={headerStyle}>
      <div className="logo" style={logoStyle}>
        beacon <span role='img' aria-labelledby="school">💡</span>
      </div>
    </Header>
  )
}

export default HeaderNoBtn;
