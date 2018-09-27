import React from 'react';
import { connect } from 'dva';
import { Layout,Input, AutoComplete, Icon } from 'antd';
import HeaderSite from '../components/HeaderSite.js';
import ActiveUniversities from '../components/ActiveUniversities.js';
import Testimg from '../assets/testhero2.png';
import 'antd/dist/antd.css';


const systemfont= '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol';


const universities=['University of Ottawa','Carleton University','University of Toronto','University of Waterloo','McMaster University','Queens University','Ryerson University','Mcgill University','Concordia University'];

const {Content} = Layout;

const layoutStyle = {
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}

const contentStyle= {
    padding: '0 50px',
    fontFamily: systemfont,
    margin: '20',
    width:'100%',
    display:'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: '1 0 auto'
  }
const heroSvgStyle={
  width: 'fit-content',
  flex:1
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
    fontFamily: systemfont,
    fontSize: 45,
    fontWeight:600,
    lineHeight:'50px',
    paddingBottom:"20px"

  }
const heroText2={fontWeight:300,fontSize:'15px',padding:"2px"}
const heroText2m={fontWeight:300,fontSize:'13px',padding:"2px", color:'dodgerblue', marginTop:15}




const IndexPage = () => (
  <Layout className="layout"
    style={layoutStyle}>
    <HeaderSite />
    <Content style={contentStyle}>
        <div style={heroTextStyle}>
          <div style={heroText1}>
            Find the best student organisations on campuses
          </div>
        <div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span>   Discover awesome student organisations on campuses.
          </div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span> Find up to date contact information
          </div>
          <div style={heroText2}>
            <span role='img' aria-labelledby="star-eyes emoji">✅</span> Connect with them
          </div>
        </div>
          {/*search bar*/}
            <AutoComplete
              dropdownMatchSelectWidth={true}
              autoFocus={true}
              dropdownStyle={{ width: 300 }}
              size="large"
              style={{ width: '100%', paddingTop:'20px' }}
              dataSource={universities}
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              placeholder="Search for a university"
            >
            <Input suffix={<Icon type="search" className="certain-category-icon"  />} />
          </AutoComplete>
          <div style={heroText2m}>
              Made with <span role='img' aria-labelledby="green-heart-emoji"> 💚 & ☕️ </span> by Tolu Olubode
          </div>
        </div>
        <div style={heroSvgStyle}>
          <img src={Testimg} alt="Ryerson University" style={{width:'109%'}}/>
        </div>
        <ActiveUniversities />
    </Content>
</Layout>
);

IndexPage.propTypes = {
};

export default connect()(IndexPage);
