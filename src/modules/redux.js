import actionTypes from './actionTypes';

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    cityCoords: null,
    currentWeather: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_CITY_COORDS_REQUEST:
            return { ...state, fetching: true, error: null };
        case actionTypes.UPDATE_CITY_COORDS_SUCCESS:
            return { ...state, fetching: false, cityCoords: action.cityCoords };
        case actionTypes.UPDATE_CITY_COORDS_FAILURE:
            return { ...state, fetching: false, cityCoords: null, error: action.error };
        case actionTypes.CURRENT_WEATHER_REQUEST:
            return { ...state, fetching: true, error: null };
        case actionTypes.CURRENT_WEATHER_SUCCESS:
            return { ...state, fetching: false, currentWeather: action.currentWeather };
        case actionTypes.CURRENT_WEATHER_FAILURE:
            return { ...state, fetching: false, currentWeather: null, error: action.error };
        default:
            return state;
    }
}