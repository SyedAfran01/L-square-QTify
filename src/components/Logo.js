import React from 'react';
import styles from './Logo.module.css';
import logoImage from '../assets/Logo.svg'; // Adjust the path

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="QTify Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
