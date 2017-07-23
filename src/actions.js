import * as types from './actionTypes';
import axios from 'axios';
//import { pushState } from 'redux-react-router';

function requestData() {
  return {type: types.REQ_DATA}
};

function receiveData(json) {
  console.log('recieved: ', json)
  return{
    type: types.RECV_DATA,
    data: json
  }
};

function receiveError(json) {
  console.log('error: ', json)
  return {
    type: types.RECV_ERROR,
    data: json
  }
};




export function fetchData(url) {
  console.log('fetch: ', url)
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      //method: 'post',
      url: url,
      withCredentials: true,
      timeout: 20000,

      headers: {'ws-api': '2.1'},
      //TODO: make these variables
    })
      .then(function(response) {
        console.log(response)
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        console.log(response)
        dispatch(receiveError(response.data));
      //  dispatch(pushState(null,'/error'));
      })
  }
};