import React, { useEffect, useState } from 'react';
import { Container, Typography, Divider } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import SummaryCards from './components/SummaryCards';
import CategoryTable from './components/CategoryTable';
import TrendChart from './components/TrendChart';
import api from './api';

export default function App() {
  const [total, setTotal] = useState(0);
  const [byCat, setByCat] = useState([]);
  const [highest, setHighest] = useState({});
  const [lowest, setLowest] = useState({});
  const [trend, setTrend] = useState([]);

  const fetchAll = () => {
    api.get('/total').then(r => setTotal(r.data));
    api.get('/categories').then(r => setByCat(r.data));
    api.get('/categories/highest').then(r => setHighest(r.data));
    api.get('/categories/lowest').then(r => setLowest(r.data));
    api.get('/trend?period=MONTHLY').then(r => setTrend(r.data));
  };

  useEffect(fetchAll, []);

  const handleAdd = (vals) =>
    api.post('', vals).then(fetchAll);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Capgemini Expense Tracker</Typography>
      <ExpenseForm onAdd={handleAdd}/>
      <Divider sx={{ my: 4 }}/>
      <SummaryCards total={total} highest={highest} lowest={lowest}/>
      <CategoryTable data={byCat}/>
      <TrendChart data={trend}/>
    </Container>
  );
}
