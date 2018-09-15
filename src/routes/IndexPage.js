import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input } from 'antd';
import { Route } from 'react-router-dom'
import HeroSvg from '../components/heroSVG.js';
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;
const Search = Input.Search;
const layoutStyle = {
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}
const headerStyle ={background: 'white',display:'flex',flex:'none'}
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
    marginTop:'50',
    padding: 24,
    maxHeight: '100%',
    maxWidth: '100%',
    flex:1
  }
const heroText1={
    fontFamily: 'lato',
    fontSize: 45,
    fontWeight:600
  }
const heroText2={fontWeight:200}
const searchBarStyle={marginTop:10}
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
          <HeroSvg/>
        </div>
        <div style={heroTextStyle}>
          <h3 style={heroText1}>
          Find the best student organisations on campuses
        </h3>
          <h2 style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Discover awesome student organisations on campuses.
          </h2>
          <h2 style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅ </span>  See the work they have done.
          </h2>
          <h2 style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Connect with them.
          </h2>
          {/*search bar*/}
          <Search style={searchBarStyle}
              placeholder="Search for a school"
              onSearch={value => console.log(value)}
              enterButton
          />
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
