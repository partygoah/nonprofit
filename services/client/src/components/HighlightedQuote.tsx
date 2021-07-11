import React from 'react';
import PropTypes from 'prop-types';

export const HighlightedQuote: React.FC = ({ children }) => {
  return (
    <div className='article-quote right'>
      <aside style={{ display: 'block' }}>{`„${children}“`}</aside>
    </div>
  );
};

HighlightedQuote.propTypes = {
  children: PropTypes.node.isRequired,
};
