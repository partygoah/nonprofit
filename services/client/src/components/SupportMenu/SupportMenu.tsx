/* eslint-disable */
import React from 'react';
import './SupportMenu.styles.scss';
import { Link } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { SupportMenuItem } from '../SupportMenuItem/SupportMenuItem';

// interface ItemProps {
//     id: number;
// }

// interface SupportMenuProps {
//     supportItems: [ItemProps];
// }

// export const SupportMenu: React.FC<SupportMenuProps> = ( {supportItems} ): JSX.Element => {
export const SupportMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <div>
            Jeigu norite prisidėti prie mūsų idėjos, galite tai padaryti banko
            pavedimu.
          </div>
          <div>Gavėjo sąskaita: LT077300010167095913</div>
          <div>Gavėjo vardas: VŠĮ JAU DABAR</div>
          <div>Nepamirškite į paskirtį įrašyti žodžio „auka‘‘.</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'></DialogContentText>
        </DialogContent>
      </Dialog>
      <h3 style={{ textAlign: 'center' }}>
        Kadangi esame pelno nesiekianti organizacija, prašome Jūsų prisidėti
        prie mūsų veiklos finansiškai, jog galėtume toliau sėkmingai vykdyti
        savo misiją.
      </h3>
      <div className='support-menu'>
        {/* {
                supportItems.map((item) => (
                    <SupportMenuItem key={item.id} item={item} />
                ))
            } */}
        <a
          className='menu-item'
          href='https://www.patreon.com/jaudabar'
          target='_blank'
          rel='noopener noreferrer'
          style={{ backgroundColor: '#D5D6EA' }}
        >
          <SupportMenuItem key={1} item={{ title: 'Patreon' }} />
        </a>
        <div
          className='menu-item'
          onClick={handleOpen}
          style={{ backgroundColor: '#D7ECD9' }}
        >
          <SupportMenuItem key={2} item={{ title: 'Banko pavedimas' }} />
        </div>
        <Link
          className='menu-item'
          to='/parama/gpm'
          style={{ backgroundColor: '#FFDEE1' }}
        >
          <SupportMenuItem key={3} item={{ title: '1,2% GPM parama' }} />
        </Link>
      </div>
    </div>
  );
};
