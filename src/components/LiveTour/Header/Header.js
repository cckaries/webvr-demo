import React from 'react';

import * as styles from './Header.module.css';

const header = props => {
  return (
    <div className={styles.Container}>
      <div>{props.title}</div>
      {/* <div>
        <button>B1</button>
        <button>B1</button>
        <button>B1</button>
        <button>B1</button>
      </div> */}
    </div>
  );
};

export default header;
