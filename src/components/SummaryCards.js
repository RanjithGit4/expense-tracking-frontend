import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function SummaryCards({ total, highest, lowest }) {
  const items = [
    { label: 'Total Spent', value: total },
    { label: `Highest: ${highest.category}`, value: highest.total },
    { label: `Lowest: ${lowest.category}`, value: lowest.total },
  ];
  return (
    <Grid container spacing={5} sx={{ my: 2 }}>
      {items.map((it, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card>
            <CardContent>
              <Typography variant="overline">{it.label}</Typography>
              <Typography variant="h6">${it.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
