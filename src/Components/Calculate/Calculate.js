import React from 'react';
import styles from './Calculate.module.scss';

const Calculate = () => (
  <div className={styles.component}>
    <div className={styles.radiuses}>
      <div className={styles.radius1}>
        <h5 className={styles.radiusLabel}>Radius 1</h5>
        <div className={styles.valueContainer}>
          <p className={styles.value}>10.0</p>
        </div>
      </div>
      <div className={styles.radius2}>
        <h5 className={styles.radiusLabel}>Radius 2</h5>
        <div className={styles.valueContainer}>
          <p className={styles.value}>10.0</p>
        </div>
      </div>
    </div>
  </div>
);

export default Calculate;
