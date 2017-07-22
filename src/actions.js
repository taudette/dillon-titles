import * as types from './actionTypes';
import axios from 'axios';
//import { pushState } from 'redux-react-router';

const webService = 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7'

function requestData() {
  return {type: types.REQ_DATA}
};

function receiveData(json) {
  return{
    type: types.RECV_DATA,
    data: json
  }
};

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
};

export function fetchData(url) {
  console.log('fetch')
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      header: 'ws-api',
      value: '2.1'
    })
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      //  dispatch(pushState(null,'/error'));
      })
  }
};