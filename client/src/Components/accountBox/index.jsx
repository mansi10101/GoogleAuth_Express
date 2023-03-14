import React from 'react';
import { motion } from 'framer-motion';
// import { AccountContext } from './accountContext';
import imgsignin from '../../assets/login.jpg';
import imgsignup from '../../assets/signup.jpg';
import styles from '../../stylesheets/Container.module.css';
import {
  backdropVariants,
  expandingTransition,
  ani_container,
  ani_header,
  ani_img,
} from '../../lib/animations';
import styled from 'styled-components';
import {LogIn} from './LogIn';
import {SignUp} from './SignUp';
import Home from '../Home';
// import Home from '../Home';

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: linear-gradient(
    405deg,
    rgb(241, 196, 15) 20%,
    rgb(243, 172, 18) 100%
  );
`;

export function AccountBox({user}) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState('signup');

  const playExpandingAnimation = () => {
    setExpanded(true);
    setActive(null);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 1000);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 1000);
  };



  return (
    <motion.div
      variants={ani_container}
      animate='animate'
      initial='initial'
      className={styles.BoxContainer}
    >
      <div className={styles.TopContainer}>
        <BackDrop
          initial={false}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === 'signin' && (
          <motion.div variants={ani_header} className={styles.HeaderContainer}>
            <div className={styles.HeaderText}>Welcome</div>
            <div className={styles.HeaderText}>Back</div>
            <div className={styles.SmallText}>Please Login to continue!</div>
          </motion.div>
        )}
        {active === 'signup' && (
          <motion.div variants={ani_header} className={styles.HeaderContainer}>
            <div className={styles.HeaderText}>Create</div>
            <div className={styles.HeaderText}>Account</div>
            <div className={styles.SmallText}>Please Sign-up to continue!</div>
          </motion.div>
        )}
      </div>
      <div className={styles.container}>
        {active === 'signin' && user === null && (
          <LogIn switchToSignup={switchToSignup} />
        )}
        {active === 'signup' && user === null && (
          <SignUp switchToSignin={switchToSignin} />
        )}
        {user && <Home userDetails={user} />}
        {active && (
          <motion.img
            variants={ani_img}
            className={styles.image}
            style={{ width: '254px', height: '90%' }}
            src={active === 'signin' ? imgsignin : imgsignup}
            alt='img'
          />
        )}
      </div>
    </motion.div>
  );
}
