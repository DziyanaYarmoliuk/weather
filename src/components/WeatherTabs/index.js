import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import style from './style.module.scss';

class WeatherTabs extends Component {
    render() {
        const { currentWeather } = this.props;
        return(
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.headerCell}>Date and time</div>
                    <div className={style.headerCell}>SPP (%)</div>
                    <div className={style.headerCell}>p cat (category)</div>
                    <div className={style.headerCell}>p min (kg/m2/h)</div>
                    <div className={style.headerCell}>p mean (kg/m2/h)</div>
                    <div className={style.headerCell}>p max (kg/m2/h)</div>
                    <div className={style.headerCell}>p median (kg/m2/h)</div>
                    <div className={style.headerCell}>tcc mean (octas)</div>
                    <div className={style.headerCell}>lcc mean (octas)</div>
                    <div className={style.headerCell}>mcc mean (octas)</div>
                    <div className={style.headerCell}>hcc mean (octas)</div>
                    <div className={style.headerCell}>msl (hPa)</div>
                    <div className={style.headerCell}>t (Cel)</div>
                    <div className={style.headerCell}>vis (km)</div>
                    <div className={style.headerCell}>wd (m/s)</div>
                    <div className={style.headerCell}>r (%)</div>
                    <div className={style.headerCell}>tstm (%)</div>
                    <div className={style.headerCell}>qust (m/s)</div>
                    <div className={style.headerCell}>Wsymb2 (category)</div>
                </div>
                {
                    currentWeather.map((item, i)=> (
                        <div key={`item-${i}`} className={style.row}>

                            <div className={style.cell}>{moment(item.validTime).format('YYYY-MM-DD hh:mm:ss')}</div>

                            {item.parameters.map((param, index)=>(
                                <div className={style.cell} key={`param-${i}-${index}`}>{param.values[0]}</div>
                            ))}
                        </div>
                    ))
                }
            </div>
        )
    }
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

