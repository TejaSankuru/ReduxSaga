import userSagas from './users.js';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...userSagas
    ])
}