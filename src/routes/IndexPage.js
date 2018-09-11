import React from 'react';
import { connect } from 'dva';
import { Layout, Button} from 'antd';
import HeroSvg from '../components/heroSVG.js'
// import './IndexPage.css';

const { Header, Content, Footer } = Layout;

const IndexPage = () => (
  <Layout className="layout">
    <Header className="header">
      <div className="logo" style={{width: 120, height: 31, margin: '16 24 16 0', float: 'left'}}>
        <b>StudentOrgFinder</b>
      </div>
      <div className="submit" style={{float:'right'}}>
        <Button
          type='primary'
          >
          Submit a student organisation
        </Button>
      </div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{
        width: 'fit-content',
        float:'left'
        }}>
        <HeroSvg/>
      </div>
      <div style={{
          background: '#fff',
          marginTop:'50',
          padding: 24,
          maxHeight: '100%',
          float:'right'
        }}>
        <h3 style={{
            fontSize: 48,
          }}>
        <b>StudentOrgFinder</b>
      </h3>
        <p>Discover awesome student orgs at universities</p>
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
      Made by Tolu Olubode
    </Footer>
</Layout>
);
  // return (
  //
  // );

IndexPage.propTypes = {
};

export default connect()(IndexPage);
