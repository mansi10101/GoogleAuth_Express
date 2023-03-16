import React from 'react';
import formstyles from '../stylesheets/Form.module.css';
import styles from '../stylesheets/Home.module.css';
import { motion } from 'framer-motion';
import { Marginer } from './marginer';

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

const Home = ({ userDetails }) => {
  const user = userDetails;
  // console.log("user",user.picture);
  const logout = () => {
    window.open('http://localhost:8080/auth/logout', '_self');
  };
  return (
    <motion.div variants={ani_content} className={formstyles.BoxContainer}>
      <div className={styles.FormContainer}>
        <img
          className={styles.profile_img}
          src={user.picture}
          alt='profile img'
        />
        <div className={styles.showdetails}>
          <label>Name:</label>
          <p className={styles.text}>{user.name}</p>
        </div>
        <div className={styles.showdetails}>
          <label> Email:</label>
          <p className={styles.text}>{user.email}</p>
        </div>
      </div>
      <Marginer direction='vertical' margin={10} />
      <button
        onClick={logout}
        className={formstyles.SubmitButton}
        type='submit'
      >
        Logout
      </button>
    </motion.div>
  );
};

export default Home;
