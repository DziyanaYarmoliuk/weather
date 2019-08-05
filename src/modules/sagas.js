import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield all([
        takeLatest("UPDATE_CITY_COORDS_REQUEST", updateUserCoords),
        takeLatest("CURRENT_WEATHER_REQUEST", getCurrentWeather)
    ])
}

function* updateUserCoords({cityCoords}) {
    try {
        yield put({ type: "UPDATE_CITY_COORDS_SUCCESS", cityCoords });
    } catch (e) {
        yield put({ type: "UPDATE_CITY_COORDS_FAILURE", e });
    }
}

function currentWeatherRequest({lat, lng}) {
    const latValue = lat.toFixed(5);
    const lngValue = lng.toFixed(5);
    return axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lngValue}&APPID=f04a25e04c9805942ca14ed1c632c498`
    })
}

function* getCurrentWeather({cityCoords}) {
    try {
        const response = yield call(currentWeatherRequest ,cityCoords);
        const currentWeather = response.data;

        yield put({ type: "CURRENT_WEATHER_SUCCESS", currentWeather });
    } catch (e){
        yield put({ type: "CURRENT_WEATHER_FAILURE", error: e.message });
    }

}