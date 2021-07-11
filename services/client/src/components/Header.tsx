import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ultlogo2.png';
import { RouteModel } from '../models/shared';
import { isMobile } from 'react-device-detect';

// interface HeaderProps {
//   tabs: RouteModel[];
// }

export const Header: React.FC = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Paper className='header'> */}
      <div className='header'>
        {isMobile ? (
          <div className='tabs'>
            <Link className='tab' to='/apie-mus'>
              APIE MUS
            </Link>

            <Link className='tab' to='/susisiek'>
              SUSISIEK
            </Link>
            <Link className='tab' to='/parama'>
              PARAMA
            </Link>
            <Link to='/'>
              <img src={logo} alt='headerLogo' className='logo' />
            </Link>
          </div>
        ) : (
          <div className='tabs'>
            <Link className='tab' to='/'>
              PAGRINDINIS
            </Link>
            <Link className='tab' to='/apie-mus'>
              APIE MUS
            </Link>
            <Link to='/'>
              <img src={logo} alt='headerLogo' className='logo' />
            </Link>
            <Link className='tab' to='/susisiek'>
              SUSISIEK
            </Link>
            <Link className='tab' to='/parama'>
              PARAMA
            </Link>
          </div>
        )}
      </div>
      {/* </Paper> */}
    </>
  );
};
