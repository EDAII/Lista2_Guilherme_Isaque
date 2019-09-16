import React from 'react';

import {ItemView, ItemText} from './styles';

const ListItem = ({item}) => (
  <ItemView using={item.using}>
    <ItemText using={item.using}>{item.number}</ItemText>
  </ItemView>
);

export default ListItem;
