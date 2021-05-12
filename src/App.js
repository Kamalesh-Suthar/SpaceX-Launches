import React from 'react';
import classes from './App.module.css';
import Filter from './Components/Filter/filter';
import Launches from './Components/Launches/Launches';
import { DEDAULT_DATA_URL, Launch_AND_Land_Success_URL, Launch_Success_URL, ALL_URL } from './Utils/API_Endpoints.js'
import fetchData from './Utils/Common Methods/fetchData'

class App extends React.Component {

  state = {
    success_launch: null,
    success_land: null,
    firstRender: [],
    launchTrueData: [],
    launchLandTrueData: [],
    allData: [],
    year: null
  }

  yearChange(value) {
    this.setState({ year: value, success_launch: true, success_land: false })
  }

  changeSuccessLaunch(value) {
    this.setState({ success_launch: value })
  }

  changeSuccessLand(value) {
    this.setState({ success_land: value })
  }

  componentDidMount() {
    fetchData(DEDAULT_DATA_URL).then(data => {
      if (this.state.firstRender.length === 0) {
        console.log("yes")
        this.setState({ firstRender: data })
      }
    })
    fetchData(Launch_AND_Land_Success_URL).then(data => {
      if (this.state.launchLandTrueData.length === 0) {
        this.setState({ launchLandTrueData: data })
      }
    })
    fetchData(Launch_Success_URL).then(data => {
      if (this.state.launchTrueData.length === 0) {
        this.setState({ launchTrueData: data })
      }
    })
    fetchData(ALL_URL).then(data => {
      if (this.state.allData.length === 0) {
        this.setState({ allData: data })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2 className={classes.Title}>SpaceX Launch Programs</h2>
          </div>
          {this.state.launchLandTrueData.length ?
          <div className={classes.MainSection}>
            <Filter changeYear={this.yearChange.bind(this)} changeSuccessLaunch={this.changeSuccessLaunch.bind(this)} changeSuccessLand={this.changeSuccessLand.bind(this)} launchStatus={this.state.success_launch} landStatus={this.state.success_land} />
            {
              this.state.success_launch === null && this.state.success_land === null && this.state.year === null ?
                <Launches data={this.state.firstRender} year={this.state.year} success_land={this.state.success_land} success_launch={this.state.success_launch} />
                :
                null
            }
            {
              this.state.success_launch === true && this.state.success_land === true ?
                <Launches data={this.state.launchLandTrueData} year={this.state.year} success_land={this.state.success_land} success_launch={this.state.success_launch} />
                :
                null
            }
            {
              this.state.success_launch === true ?
                this.state.success_land === false || this.state.success_land === null ?
                  <Launches data={this.state.launchTrueData} year={this.state.year} success_land={this.state.success_land} success_launch={this.state.success_launch} />
                  :
                  null
                :
                null
            }
            {
              this.state.success_launch === false ?
                <Launches data={this.state.allData} year={this.state.year} success_land={this.state.success_land} success_launch={this.state.success_launch} />
                :
                null
            }
          </div>
          :
          null
        }
        <div className={classes.Footer}>Designed and Developed by <strong>Kamalesh Suthar</strong></div>
      </div>
    );
  }
}

export default App;
