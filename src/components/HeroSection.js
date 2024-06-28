import React from 'react';
import styles from './HeroSection.module.css';
import HeroImage from '../assets/HeroImage.svg'; // Import HeroImage from assets

const HeroSection = () => {
  return (
    <section className={styles.hero} data-testid="hero-section">
      <div className={styles.content}>
        <img src={HeroImage} alt="Headphones" className={styles.headphones} />
        <div className={styles.text}>
          <h1>100 Thousand Songs, ad-free</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
