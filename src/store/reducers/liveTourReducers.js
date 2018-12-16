import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  panoramas: null,
  chosenPanorama: {},
  loading: false,
  error: null
}

const fetchPanoramasStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const fetchPanoramasSuccess = (state, action) => {
  return updateObject(state, {
    panoramas: action.data,
    loading: false
  })
}

const fetchPanoramasFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  })
}

const choosePanorama = (state, action) => {
  return updateObject(state, {
    chosenPanorama: action.index ? state.panoramas[action.index] : state.panoramas[0]
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PANORAMAS_START: return fetchPanoramasStart(state, action);
    case actionTypes.FETCH_PANORAMAS_SUCCESS: return fetchPanoramasSuccess(state, action);
    case actionTypes.FETCH_PANORAMAS_FAIL: return fetchPanoramasFail(state, action);
    case actionTypes.CHOOSE_PANORAMA: return choosePanorama(state, action);
    default: return state;
  }
}

export default reducer;
