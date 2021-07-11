import React from 'react';

import { EmailForm } from '../components/EmailForm/EmailForm';

export const ContactUsPage: React.FC = () => {
  return (
    <div className='page-content' style={{ height: '45vh' }}>
      Jeigu norite su mumis susisiekti, galite parašyti šiuo elektroninu paštu:{' '}
      <span style={{ fontStyle: 'italic' }}>info@jaudabar.org</span>
      {/* <EmailForm /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '15px 15px 15px 15px',
        }}
      >
        <a
          href='https://www.instagram.com/jau.dabar/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-logo-mobile'
        >
          <img
            style={{
              padding: '15px 15px 15px 15px',
            }}
            width='60px'
            alt='Instagram'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/512px-Instagram.svg.png'
          />
        </a>
        <a
          href='https://www.facebook.com/jaudabar.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-logo-mobile'
        >
          <img
            style={{
              padding: '15px 15px 15px 15px',
            }}
            width='60px'
            alt='Facebook'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/256px-Facebook_f_Logo_%28with_gradient%29.svg.png'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/jau-dabar'
          target='_blank'
          rel='noopener noreferrer'
          className='social-logo-mobile'
        >
          <img
            style={{
              padding: '15px 15px 15px 15px',
            }}
            width='60px'
            alt='Linkedin'
            src='https://upload.wikimedia.org/wikipedia/commons/7/76/Font_Awesome_5_brands_linkedin.svg'
          />
        </a>
      </div>
    </div>
  );
};
