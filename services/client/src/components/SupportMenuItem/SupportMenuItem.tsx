/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

import './SupportMenuItem.styles.scss';

interface ItemProps {
  title: string;
}

interface SupportMenuItemProps {
  item: ItemProps;
}

export const SupportMenuItem: React.FC<SupportMenuItemProps> = ({ item }) => {
  return (
    // <Link to='/parama/gpm'>
    // <div
    //   className='menu-item'
    //   // onClick={() => history.push(`${match.url}/${genre.routeName}`)}
    // >
    <div className='content'>
      <h1 className='title'>{item.title} </h1>
    </div>
    // </Link>
  );
};
