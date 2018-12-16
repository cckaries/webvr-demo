import React from 'react';

import * as styles from './Item.module.css';

const Item = props => {
  let classes = [styles.Container, props.isActive ? styles.active : null].join(' ');

  return (
    <div className={classes} onClick={() => props.clicked(props.item.index)}>
      <img src={props.item.thumbnail} alt={props.item.name} />
      <div>{props.item.category}</div>
    </div>
  );
};

export default Item;
