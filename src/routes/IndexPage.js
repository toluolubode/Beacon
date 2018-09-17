import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Input, AutoComplete, Icon } from 'antd';
import { Route} from 'react-router-dom'
import GraduationSVG from '../components/graduationSVG.js';
import 'antd/dist/antd.css';
import Uottawa from '../assets/university-logo/uottawa.png';
import Waterloo from '../assets/university-logo/waterloo.png';
import Carleton from '../assets/university-logo/carleton.png';
import Queens from '../assets/university-logo/queens.png';
import UofT from '../assets/university-logo/uoft.png';
import Ryerson from '../assets/university-logo/ryerson.png';


const universities=['University of Ottawa','Carleton University','University of Toronto','University of Waterloo','McMaster University','Queens University','Ryerson University','Mcgill University'];

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
const logoStyle= {
  color:'#4B4B4B',
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
const heroText2={fontWeight:300,fontSize:'15px',padding:"2px"}
const subTextStyle={
    display:'flex',
    flex: '0 0 100%',
    justifyContent:'right',
    width: 'auto',
    maxHeight: '100%',
    flexDirection:'column',
    textAlign:'center'
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
    flex:'none',
    marginTop:'50px'
}
const imageRow={
  display: 'flex',
  width:'100%',
  paddingTop:'5vh'
}

const imageCol={
  flex: '33.33%',
  padding: '1vh',
  alignSelf:'center'
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
              placeholder="Search for universities"
            >
            <Input suffix={<Icon type="search" className="certain-category-icon"  />} />
          </AutoComplete>
        </div>
        <div style={heroSvgStyle}>
          <GraduationSVG/>
        </div>
        <div style={subTextStyle}>
          <div>Beacon is active in these schools</div>
          <div style={imageRow}>
            <div style={imageCol}>
              <img src={Uottawa} alt="UOttawa" style={{width:'36%'}}/>
            </div>
            <div style={imageCol}>
              <img src={Carleton} alt="Carleton University" style={{width:'80%'}}/>
            </div>
            <div style={imageCol}>
              <img src={Waterloo} alt="University of Waterloo" style={{width:'80%'}}/>
            </div>
            <div style={imageCol}>
              <img src={Queens} alt="Queens University" style={{width:'60%'}}/>
            </div>
            <div style={imageCol}>
              <img src={UofT} alt="University of Toronto" style={{width:'60%'}}/>
            </div>
            <div style={imageCol}>
              <img src={Ryerson} alt="Ryerson University" style={{width:'60%'}}/>
            </div>
          </div>
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
