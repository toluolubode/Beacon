import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input, Icon, Autocomplete } from 'antd';
import HeroSvg from '../components/heroSVG.js';
import './IndexPage.css';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const Search = Input.Search;

const IndexPage = () => (
  <Layout className="layout" style={{background: 'white'}}>
    <Header className="header" style={{background: 'white'}}>
      <div className="logo" style={{color:'#4B4B4B', width: 120, height: 31, margin: '16 24 16 0', float: 'left',fontSize:20,fontWeight:500}}>
        Beacon <span role='img' aria-labelledby="school">💡</span>
      </div>
      <div className="submit" style={{float:'right'}}>
        <Button
          type='primary'
          >
          Submit a student organisation <span role='img' aria-labelledby='memo'>📝</span>
        </Button>
      </div>
    </Header>
    <Content style={{
        padding: '0 50px',
        margin: '20',
        display:'flex',
        alignContent: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: 'fit-content',
          flex:1,
          paddingTop: 30
          }}>
          <HeroSvg/>
        </div>
        <div style={{
            background: '#fff',
            marginTop:'50',
            padding: 24,
            maxHeight: '100%',
            maxWidth: '100%',
            flex:1
          }}>
          <h3 style={{
              fontFamily: 'lato',
              fontSize: 45,
              fontWeight:900
            }}>
          Find the best student organisations on campuses
        </h3>
          <h2 style={{
              fontWeight:200
            }}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Discover awesome student organisations on campuses.
          </h2>
          <h2 style={{
              fontWeight:200
            }}>
            <span role='img' aria-labelledby="star-eyes emoji">✅ </span>  See the work they have done.
          </h2>
          <h2 style={{
              fontWeight:200
            }}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Connect with them.
          </h2>
          <Search style={{
              marginTop:10
            }}
              placeholder="Search for a school"
              onSearch={value => console.log(value)}
              enterButton
          />
        </div>
    </Content>
    <Footer style={{
        background:'whitesmoke',
        // opacity: '50%',
        position: 'fixed',
        height:'50',
        left:0,
        bottom:0,
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
        }}>
      Made with <span role='img' aria-labelledby="green-heart-emoji"> 💚 </span> by Tolu Olubode
    </Footer>
</Layout>
);

IndexPage.propTypes = {
};

export default connect()(IndexPage);
