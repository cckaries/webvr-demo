import React from 'react';

import * as styles from './ItemList.module.css';
import Item from './Item/Item';

const ItemList = props => {
  let items =
    props.items &&
    props.items.map(item => (
      <Item
        item={item}
        isActive={item.index === props.activePanorama}
        key={item.index}
        clicked={props.chooseItem}
      />
    ));

  return (
    <div className={styles.Container}>
      <div>{items}</div>
    </div>
  );
};

export default ItemList;
