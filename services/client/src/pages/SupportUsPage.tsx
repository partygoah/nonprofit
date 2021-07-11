import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { SupportItem } from './SupportItem/SupportItem';
import { SupportMenu } from '../components/SupportMenu/SupportMenu';
import { GpmSupport } from './GpmSupport/GpmSupport';

// interface TParams { id: string };

// interface Props extends RouteComponentProps<TParams> {
// }
// export const SupportUsPage: React.FC<RouteComponentProps<TParams>> = (props) => {

// interface ItemProps {
//     id: number;
// }

// interface SupportMenuProps {
//     supportItems: [ItemProps];
// }

// const supportItems: SupportMenuProps = { id: 1};

export const SupportUsPage: React.FC = () => {
  return (
    <>
      <div className='page-content'>
        {/* <Route exact path={`${match.path}`} component={SupportMenu} />
          <Route path={`${match.path}/:id`} component={SupportItem} /> */}
        <Route exact path={'/parama'} component={SupportMenu} />
        <Route path={`/parama/gpm`} component={GpmSupport} />
      </div>
    </>
  );
};
