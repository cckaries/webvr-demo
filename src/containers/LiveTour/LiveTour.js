import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as styles from './LiveTour.module.css';
import * as actions from '../../store/actions/index';
import Header from '../../components/LiveTour/Header/Header';
import ItemList from '../../components/LiveTour/ItemList/ItemList';
import Viewport from '../../components/LiveTour/Viewport/Viewport';

class LiveTour extends Component {
  componentDidMount = () => {
    this.props.onFetchPanoramas();
  };

  changePanoramaHandler = index => {
    this.props.onChoosePanorama(index);
  };

  render() {
    return (
      <div className={styles.Container}>
        <Viewport image={this.props.chosenPanorama.desktopUrl} />
        <Header title={this.props.chosenPanorama.category} />
        <ItemList
          items={this.props.panoramas}
          activePanorama={this.props.chosenPanorama.index}
          chooseItem={this.changePanoramaHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    panoramas: state.liveTour.panoramas,
    chosenPanorama: state.liveTour.chosenPanorama,
    loading: state.liveTour.chosenPanorama
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchPanoramas: () => dispatch(actions.fetchPanoramas()),
    onChoosePanorama: index => dispatch(actions.choosePanorama(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveTour);
