import { takeEvery, call, fork }  from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        console.log("result", result);
    }catch(e){

    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.getUsersRequest, getUsers)
}

const userSagas = [
    fork(watchGetUsersRequest)
]

export default userSagas;