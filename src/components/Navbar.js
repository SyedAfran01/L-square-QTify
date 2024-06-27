import React from 'react';
import styles from './Navbar.module.css';
import SearchBar from './SearchBar';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
