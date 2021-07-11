import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface ScrollToTopProps {
    history: History
}
const ScrollToTop: React.FC<ScrollToTopProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
