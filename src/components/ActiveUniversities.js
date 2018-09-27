import React from 'react';
import Uottawa from '../assets/university-logo/uottawa.png';
import Waterloo from '../assets/university-logo/waterloo.png';
import Carleton from '../assets/university-logo/carleton.png';
import Queens from '../assets/university-logo/queens.png';
import UofT from '../assets/university-logo/uoft.png';
import Ryerson from '../assets/university-logo/ryerson.png';
import styles from '../styles/ActiveUniversitiesStyle.css'


const ActiveUniversities = () => {
  return (
    <div className={styles.subTextStyle}>
      <div>Beacon is active in these schools</div>
      <div className={styles.imageRow}>
        <div className={styles.imageCol}>
          <img src={Uottawa} alt="UOttawa" style={{width:'36%'}}/>
        </div>
        <div className={styles.imageCol}>
          <img src={Carleton} alt="Carleton University" style={{width:'80%'}}/>
        </div>
        <div className={styles.imageCol}>
          <img src={Waterloo} alt="University of Waterloo" style={{width:'80%'}}/>
        </div>
        <div className={styles.imageCol}>
          <img src={Queens} alt="Queens University" style={{width:'60%'}}/>
        </div>
        <div className={styles.imageCol}>
          <img src={UofT} alt="University of Toronto" style={{width:'60%'}}/>
        </div>
        <div className={styles.imageCol}>
          <img src={Ryerson} alt="Ryerson University" style={{width:'60%'}}/>
        </div>
      </div>
    </div>
  );
}

export default ActiveUniversities;
