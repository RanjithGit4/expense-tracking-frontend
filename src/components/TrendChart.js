import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Paper, Typography } from '@mui/material';

export default function TrendChart({ data }) {
  return (
    <Paper sx={{ p: 2, my: 2 }}>
      <Typography variant="overline" gutterBottom>Monthly Trend</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="linear" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
