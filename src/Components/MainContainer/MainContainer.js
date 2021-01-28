import React from 'react';
// import Calculate from '../Calculate/Calculate';
import Visualisation from '../Visualisation/Visualisation';
import styles from './MainContainer.module.scss';
import logo from './ump-logo.png';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class MainContainer extends React.Component {
  state = {
    radius1: 10.0,
    radius2: 10.0,
    sync: false,
    volumeFlow: 4.0,
    viscosity: 2.0,
    density: 1060,
  }

  render(){

    const changeValue = (value, type, radiusNr, kind) => {
      if(kind==='radius'){
        if(type === 'decrease' && value>=10.1){
          value -= 0.1;
        } else if(type === 'increase'&& value<=12.5){
          value += 0.1;
        }
        if(this.state.sync){
          this.setState({radius1: parseFloat(value.toFixed(1))});
          this.setState({radius2: parseFloat(value.toFixed(1))});
        } else {
          radiusNr === 1 ? this.setState({radius1: parseFloat(value.toFixed(1))}) : this.setState({radius2: parseFloat(value.toFixed(2))});
        }
      } else if(kind === 'volumeFlow'){
        if(type === 'decrease' && value>=4.1){
          value -= 0.1;
        } else if(type === 'increase'&& value<=7.9){
          value += 0.1;
        }
        this.setState({volumeFlow: parseFloat(value.toFixed(1))});

      } else if(kind === 'viscosity'){
        if(type === 'decrease' && value>=2.1){
          value -= 0.1;
        } else if(type === 'increase'&& value<=4.9){
          value += 0.1;
        }
        this.setState({viscosity: parseFloat(value.toFixed(1))});

      }
    };
    const parseValue = (value) => {
      if (value === 2 ||value === 3 || value === 4 || value === 5 || value === 6 ||value === 7 || value === 8 ||value === 10 || value === 11 || value === 12) {
        return value + '.0';
      } else {
        return value;
      }
    };
    const changeSync = (bool) => {
      this.setState({sync: !bool});
    };

    return (
      <div className={styles.component}>
        <img alt='ump-logo' className={styles.logo} src={logo}></img>
        <div id={'window'} className={styles.window}>
          <Visualisation radius1={this.state.radius1} radius2={this.state.radius2} />
          {/* -*-*-*-*-*-*-*-*-*-*-*-* */}
          <div className={styles.calculate}>
            {/*RADIUSES*/}
            <div className={styles.radiuses}>
              <div className={styles.radius1}>
                <h5 className={styles.radiusLabel}>R a d i u s</h5>
                <div className={styles.values}>
                  <div className={styles.valueContainer}>
                    <div className={styles.value}>{parseValue(this.state.radius1)}</div>
                    <div className={styles.valueUnit}>mm</div>

                  </div>
                  <div className={styles.buttons}>
                    <ArrowDropUpIcon className={styles.arrow} onClick={()=>{changeValue(this.state.radius1, 'increase', 1, 'radius');}}/>
                    <ArrowDropDownIcon className={styles.arrow} onClick={()=>{changeValue(this.state.radius1, 'decrease', 1, 'radius');}}/>
                  </div>
                </div>
              </div>
              <div className={styles.sync}>
                <input type="checkbox" id="sync" name="sync" onClick={()=>{changeSync(this.state.sync);}}/>
                <label>Sync</label>
              </div>
              <div className={styles.radius2}>
                <h5 className={styles.radiusLabel}>R a d i u s</h5>
                <div className={styles.values}>
                  <div className={styles.valueContainer}>
                    <div className={styles.value}>{parseValue(this.state.radius2)}</div>
                    <div className={styles.valueUnit}>mm</div>

                  </div>
                  <div className={styles.buttons}>
                    <ArrowDropUpIcon onClick={()=>{changeValue(this.state.radius2, 'increase', 2, 'radius');}}/>
                    <ArrowDropDownIcon onClick={()=>{changeValue(this.state.radius2, 'decrease', 2, 'radius');}}/>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.doubleData}>
                {/*VOLUME-FLOW */}
                <div className={styles.radius1}>
                  <h5 className={styles.radiusLabel}>Volume flow</h5>
                  <div className={styles.values}>
                    <div className={styles.valueContainer}>
                      <div className={styles.value}>{parseValue(this.state.volumeFlow)}</div>
                      <div className={styles.valueUnit}>dm^3/min</div>
                    </div>
                    <div className={styles.buttons}>
                      <ArrowDropUpIcon className={styles.arrow} onClick={()=>{changeValue(this.state.volumeFlow, 'increase', 1, 'volumeFlow');}}/>
                      <ArrowDropDownIcon className={styles.arrow} onClick={()=>{changeValue(this.state.volumeFlow, 'decrease', 1, 'volumeFlow');}}/>
                    </div>
                  </div>
                </div>

                {/*DENSITY*/}
                <div id={'density'} className={styles.density}>
                  <h5 className={styles.radiusLabel}>Density</h5>
                  <div className={styles.values}>
                    <div className={styles.valueContainer}>
                      <div className={styles.value}>{parseValue(this.state.density)} </div>
                      <div className={styles.valueUnit}>kg/m^3</div>
                    </div>
                  </div>
                </div>

                {/*VISCOSITY*/}
                <div className={styles.radius1}>
                  <h5 className={styles.radiusLabel}>Viscosity</h5>
                  <div className={styles.values}>
                    <div className={styles.valueContainer}>
                      <div className={styles.value}>{parseValue(this.state.viscosity)}</div>
                      <div className={styles.valueUnit}>mPa*s</div>
                    </div>
                    <div className={styles.buttons}>
                      <ArrowDropUpIcon className={styles.arrow} onClick={()=>{changeValue(this.state.viscosity, 'increase', 1, 'viscosity');}}/>
                      <ArrowDropDownIcon className={styles.arrow} onClick={()=>{changeValue(this.state.viscosity, 'decrease', 1, 'viscosity');}}/>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
