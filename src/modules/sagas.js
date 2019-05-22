import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield all([
        takeLatest("UPDATE_CITY_COORDS_REQUEST", updateUserCoords)
    ])
}


function* updateUserCoords({cityCoords}) {
    try {
        yield put({ type: "UPDATE_CITY_COORDS_SUCCESS", cityCoords });
    } catch (e) {
        yield put({ type: "UPDATE_CITY_COORDS_FAILURE", e });
    }
}