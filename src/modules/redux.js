// action types

const UPDATE_CITY_COORDS_REQUEST = "UPDATE_CITY_COORDS_REQUEST";
const UPDATE_CITY_COORDS_SUCCESS = "UPDATE_CITY_COORDS_SUCCESS";
const UPDATE_CITY_COORDS_FAILURE = "UPDATE_CITY_COORDS_FAILURE";

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    cityCoords: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CITY_COORDS_REQUEST:
            return { ...state, fetching: true, error: null };
        case UPDATE_CITY_COORDS_SUCCESS:
            return { ...state, fetching: false, cityCoords: action.cityCoords };
        case UPDATE_CITY_COORDS_FAILURE:
            return { ...state, fetching: false, cityCoords: null, error: action.error };
        default:
            return state;
    }
}