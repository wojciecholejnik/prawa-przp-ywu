import React from 'react';
import Calculate from '../Calculate/Calculate';
import Visualisation from '../Visualisation/Visualisation';
import styles from './MainContainer.module.scss';
import logo from './ump-logo.png';

class MainContainer extends React.Component {
  state = {
    radius1: 10.0,
    radius2: 11.0,
  }
  render(){
    return (
      <div className={styles.component}>
        <img alt='ump-logo' className={styles.logo} src={logo}></img>
        <div className={styles.window}>
          <Visualisation />
          <Calculate />
        </div>
      </div>
    );
  }
}

export default MainContainer;
