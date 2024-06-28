// src/components/Card.jsx
import React from 'react';
import { Card as MuiCard, CardContent, Typography, CardMedia, Chip } from '@mui/material';
import styles from './cards.module.css';

const Card = ({ image, follows, title }) => {
  return (
    <MuiCard className={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        className={styles.image}
      />
      <CardContent className={styles.content}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
