import React from 'react';
import { connect } from "react-redux";
import { Chart } from 'react-charts';

import styles from './style.module.scss';

function WeatherTabs({ currentWeather }) {
    const data = React.useMemo(
        () => [
            {
                label: 'Temperature',
                data: currentWeather.list.map((item, i)=>{
                    return[i, item.main.temp - 273.15, item.dt_txt];
                })
            }
        ],
        []
    );

    const series = React.useMemo(
        () => ({
            showPoints: false
        }),
        []
    );

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    );

    const lineChart = (
        <div className={styles.container}>
            <Chart data={data}  series={series} axes={axes} tooltip />
        </div>
    );

    return lineChart
}

const mapStateToProps = state => {
    return {
        currentWeather: state.currentWeather
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateCoordinates: (cityCoords) => dispatch({ type: "UPDATE_CITY_COORDS_REQUEST", cityCoords})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTabs);


