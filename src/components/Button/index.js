import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import styles from './style.module.scss';

class Button extends Component {
    weatherRequest = () => {
        const { cityCoords, getCurrentWeather } = this.props;
        getCurrentWeather(cityCoords)
    }
    render() {
        const { cityCoords } = this.props;
        return(
            <Fragment>
                {cityCoords && (
                    <div className={styles.button} onClick={this.weatherRequest}>Show weather</div>
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        cityCoords: state.cityCoords,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCurrentWeather: (cityCoords) => dispatch({ type: "CURRENT_WEATHER_REQUEST", cityCoords }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
