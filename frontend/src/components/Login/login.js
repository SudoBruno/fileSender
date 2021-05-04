import React from 'react';
import Form from './components/form';
import Styles from './../Login/login.module.scss';

export default function Login() {
  return (
    <>
      <div className={Styles.contain}>
        <div className={Styles.containImage}>
          <h1>File Sender</h1>

          <img className={Styles.image} src="images/splash.svg" />
        </div>
        <Form />
      </div>
    </>
  );
}
