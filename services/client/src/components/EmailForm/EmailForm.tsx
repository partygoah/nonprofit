import React from 'react';

import './EmailForm.styles.scss';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export const EmailForm: React.FC = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'tmp_1235', e.target, 'user_1234').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form id='contact-form' onSubmit={sendEmail}>
      <input
        className='input'
        type='text'
        name='user_name'
        placeholder='Name'
      />
      <br />
      <input type='email' name='user_email' placeholder='Email' />
      <br />
      <textarea className='textarea' name='message' placeholder='Message' />
      <br />
      <input type='submit' value='Send' />
    </form>
  );
};
