import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input, AutoComplete, Icon } from 'antd';
import { Route } from 'react-router-dom'
import GraduationSVG from '../components/graduationSVG.js';
import 'antd/dist/antd.css'

const universities=['University of Ottawa','Carleton University','University of Toronto','University of Waterloo'];

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}
const headerStyle ={
  background: 'white',
  display:'flex',
  flex:'none',
  borderBottom: '1px solid rgb(223, 223, 223)',
}
const logoStyle= {color:'#4B4B4B', flex:1, width: 120, height: 31, margin: '16 24 16 0', float: 'left',fontSize:20,fontWeight:500}
const submitButtonStyle= {justifyContent:'flex-end'}
const contentStyle= {
    padding: '0 50px',
    margin: '20',
    width:'100%',
    display:'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: '1 0 auto'
  }
const heroSvgStyle={
  width: 'fit-content',
  flex:1,
  paddingTop: 30
  }
const heroTextStyle={
    background: '#fff',
    marginTop:'50px',
    padding: '24px',
    maxHeight: '100%',
    maxWidth: '100%',
    flex:1,
    color:'black'
  }
const heroText1={
    fontFamily: 'Lato',
    fontSize: 45,
    fontWeight:600,
    lineHeight:'50px',
    paddingBottom:"20px"

  }
const heroText2={fontWeight:300,fontSize:'15px',padding:"10px"}
const subTextStyle={
    display:'flex',
    flex: '0 0 100%',
    justifyContent:'center',
    width: 'auto',
    maxHeight: '100%'
  }
const footerStyle={
    background:'whitesmoke',
    // opacity: '50%',
    position: 'relative',
    height:'50',
    left:0,
    bottom:0,
    width:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    flex:'none'
    }



const IndexPage = () => (
  <Layout className="layout"
    style={layoutStyle}>
    <Header className="header" style={headerStyle}>
      <div className="logo" style={logoStyle}>
        Beacon <span role='img' aria-labelledby="school">💡</span>
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
    <Content style={contentStyle}>
        <div style={heroSvgStyle}>
          <GraduationSVG/>
        </div>
        <div style={heroTextStyle}>
          <div style={heroText1}>
          Find the best student organisations on campuses
        </div>
        <div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Discover awesome student organisations on campuses.
          </div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span> See the work they've done
          </div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span> Connect with them
          </div>
        </div>
          {/*search bar*/}
            <AutoComplete
              dropdownMatchSelectWidth={true}
              dropdownStyle={{ width: 300 }}
              size="large"
              style={{ width: '100%' }}
              dataSource={universities}
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              placeholder="Search for universities"
            >
            <Input suffix={<Icon type="search" className="certain-category-icon"  />} />
          </AutoComplete>
        </div>
        <div style={subTextStyle}>
          <h4>Beacon is active in these schools</h4>
        </div>
    </Content>
    <Footer style={footerStyle}>
      Made with <span role='img' aria-labelledby="green-heart-emoji"> 💚 </span> by Tolu Olubode
    </Footer>
</Layout>
);

IndexPage.propTypes = {
};

export default connect()(IndexPage);
