import firebase from 'firebase';

import * as actionTypes from './actionTypes';

export const fetchPanoramasStart = () => {
  return {
    type: actionTypes.FETCH_PANORAMAS_START
  };
};

export const fetchPanoramasFail = () => {
  return {
    type: actionTypes.FETCH_PANORAMAS_FAIL
  };
};

export const fetchPanoramasSuccess = data => {
  return {
    type: actionTypes.FETCH_PANORAMAS_SUCCESS,
    data: data
  };
};

export const fetchPanoramas = () => {
  return dispatch => {
    const VRCamFirebase = firebase.initializeApp({
      databaseURL: 'https://vr-cam-161603.firebaseio.com',
      serviceAccount: import('../../serviceAccountKey.json')
    });

    const liveTourId = '2d4e0ff2-681f-479b-bae2-16fcaf884fa5';
    const fetchPanoramas = VRCamFirebase.database()
      .ref('/panoramas')
      .orderByChild('Building')
      .equalTo(liveTourId);
    fetchPanoramas.once('value', snapshot => {
      const dataObj = snapshot.val();
      let dataArr = [];

      for (let i in dataObj) {
        let item = dataObj[i].data;
        dataArr.push(item);
      }

      dataArr.sort(function(a, b) {
        return a.index - b.index;
      });

      dispatch(fetchPanoramasSuccess(dataArr));
      dispatch(choosePanorama());
    });
  };
};

export const choosePanorama = (index = null) => {
  return {
    type: actionTypes.CHOOSE_PANORAMA,
    index: index
  };
};
