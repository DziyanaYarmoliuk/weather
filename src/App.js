import React from 'react';
import { connect } from "react-redux";

import {
  Header,
    WeatherTabs
} from './components';
import './App.css';

function App({currentWeather}) {
  return (
    <div className="App">
      <Header />
        {currentWeather && (
            <WeatherTabs />
        )}
    </div>
  );
}

const mapStateToProps = state => {
    return {
        currentWeather: state.currentWeather
    };
};

export default connect(mapStateToProps, null)(App);