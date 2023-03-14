import React from 'react';
import { Marginer } from '../marginer';
// import { AccountContext } from './accountContext';
import styles from '../../stylesheets/Form.module.css';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ani_content = {
  initial: { x: 20, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
export function LogIn({ switchToSignup }) {

  const googleAuth = () => {
    window.open('http://localhost:8080/auth/google/callback', '_self');
  };
  return (
    <motion.div variants={ani_content} className={styles.BoxContainer}>
      <div className={styles.FormContainer}>
        <input className={styles.Input} type='email' placeholder='Email' />
        <input
          className={styles.Input}
          type='password'
          placeholder='Password'
        />
      </div>
      <Marginer direction='vertical' margin={10} />
      <div className={styles.MutedLink} href='#'>
        Forgot your password?
      </div>
      <Marginer direction='vertical' margin='1.6em' />
      <button className={styles.SubmitButton} type='submit'>
        Login
      </button>
      <Marginer direction='vertical' margin='1em' />
      <div className={styles.MutedLink} href='#'>
        or
      </div>
      <Marginer direction='vertical' margin='0.5em' />
      <button onClick={googleAuth} className={styles.GButton}>
        <div className={styles.Gbtn}>
          {' '}
          <span>
            <FcGoogle />
          </span>{' '}
          Login with Google
        </div>
      </button>
      <Marginer direction='vertical' margin='0.5em' />
      <div className={styles.MutedLink} href='#'>
        Don't have an account?{' '}
        <Link className={styles.BoldLink} to='/signup' onClick={switchToSignup}>
          Signup
        </Link>
      </div>
    </motion.div>
  );
}

