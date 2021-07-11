import React from 'react';
import { isMobile } from 'react-device-detect';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='content-row'>
        <span>
          Jei Jums reikia skubios emocinės paramos galite skambinti visą parą
          dirbančiomis linijomis:
        </span>

        {/* <div className='social-container'>
          <a
            href='https://www.instagram.com/jau.dabar/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo'
          >
            <img src={instagram} alt='instagram' className='social' />
          </a>
          <a
            href='https://www.facebook.com/jaudabar.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo'
          >
            <img src={facebook} alt='facebook' className='social' />
          </a>
          <a
            href='https://www.linkedin.com/company/jau-dabar'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo'
          >
            <img src={linkedin} alt='linkedin' className='social' />
          </a>
        </div> */}
      </div>
      <div className='help-list'>
        <div className='help-item'>„Jaunimo linija“ - 8 800 28888</div>
        <div className='help-item'>„Vilties linija“ - 116 123</div>
        <div className='help-item'>
          „Pagalbos moterims linija“ - 8 800 66366
        </div>
        <div className='help-item'>
          „Pagalbos vyrams linija“ (18.00-21.00) - 860411119
        </div>
      </div>

      {isMobile && (
        <div className='social-container'>
          <a
            href='https://www.instagram.com/jau.dabar/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo-mobile'
          >
            <img src={instagram} alt='instagram' className='social' />
          </a>
          <a
            href='https://www.facebook.com/jaudabar.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo-mobile'
          >
            <img src={facebook} alt='facebook' className='social' />
          </a>
          <a
            href='https://www.linkedin.com/company/jau-dabar'
            target='_blank'
            rel='noopener noreferrer'
            className='social-logo-mobile'
          >
            <img src={linkedin} alt='linkedin' className='social' />
          </a>
        </div>
      )}
    </div>
  );
};
