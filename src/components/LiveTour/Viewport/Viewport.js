import React from 'react';

import * as styles from './Viewport.module.css';

const Viewport = props => {
  return (
    <div className={styles.Wrapper}>
      <a-scene embedded background="color: #ECECEC">
        <a-sky src={props.image} />
      </a-scene>
    </div>
  );
};

export default Viewport;
