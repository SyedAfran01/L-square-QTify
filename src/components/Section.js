// src/components/Section.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button, Grid } from '@mui/material';
import Card from './cards';
import styles from './Section.module.css';

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    axios.get(apiEndpoint)
      .then(response => setAlbums(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiEndpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Typography variant="h4">{title}</Typography>
        <Button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      <Grid container spacing={2} className={styles.grid}>
        {albums.slice(0, collapsed ? 4 : albums.length).map(album => (
          <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
            <Card image={album.image} follows={album.follows} title={album.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
