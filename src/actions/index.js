import * as types from './actionTypes';
import axios from 'axios';

const requestData = () => {
  return {type: types.REQ_DATA}
};

const receiveData = (json) => {
  console.log(json)
  return{
    type: types.GET_TITLES,
    data: json
  }
};

const receiveError = (json) => {
  return {
    type: types.RECV_ERROR,
    data: json
  }
};

export const fetchData = (url, headers) => {
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 20000,
      headers: headers,
    })
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      })
  }
};