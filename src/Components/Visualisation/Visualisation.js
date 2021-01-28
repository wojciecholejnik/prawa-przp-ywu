import React from 'react';
import styles from './Visualisation.module.scss';
import PropTypes from 'prop-types';

class Visualisation extends React.Component {
  static propTypes = {
    radius1: PropTypes.number,
    radius2: PropTypes.number,
  }
  render(){
    return(
      <div className={styles.component}>
        <div className={styles.tubesContainer1}>
          <div className={styles.static}><div className={styles.staticValue}>998</div></div>
          <div className={styles.total}><div className={styles.totalValue}>1000</div></div>
        </div>
        <div className={styles.tubesContainer2}>
          <div className={styles.static}><div className={styles.staticValue}>998</div></div>
          <div className={styles.total}><div className={styles.totalValue}>1000</div></div>
        </div>
        <div id={'radius1Vis' + this.props.radius1} className={styles.radius1Vis}>
        </div>
        <div id={'radius2Vis' + this.props.radius2} className={styles.radius2Vis}>
        </div>
      </div>
    );
  }
}

export default Visualisation;
