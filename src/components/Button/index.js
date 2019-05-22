import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import styles from './style.module.scss';

class Button extends Component {
    render() {
        const { cityCoords } = this.props
        return(
            <Fragment>
                {cityCoords && (
                    <div className={styles.button}>Show weather</div>
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
        onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
        updateCoordinates: () => dispatch({ type: "UPDATE_CITY_COORDS_REQUEST"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
