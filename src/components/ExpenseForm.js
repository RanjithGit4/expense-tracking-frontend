import React from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  category: yup.string().required('Category is required'),
  amount: yup.number().positive('Must be > 0').required('Amount is required'),
  date: yup.date().max(new Date(), 'Cannot be future').required('Date is required'),
});

export default function ExpenseForm({ onAdd }) {
  const formik = useFormik({
    initialValues: { category: '', amount: '', date: '' },
    validationSchema: schema,
    onSubmit: (vals, { resetForm }) =>
      onAdd(vals).then(() => resetForm())
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', gap: 3 }}>
        {/* make category with fixed size */}
      <TextField
        select label="Category" name="category"
        value={formik.values.category} onChange={formik.handleChange}
        error={!!formik.errors.category} helperText={formik.errors.category}
        sx={{ flexBasis: 200 }}
      >
        {['Food','Travel','Bills','Other'].map(c =>
          <MenuItem key={c} value={c}>{c}</MenuItem>
        )}
      </TextField>
      <TextField
        label="Amount" name="amount" type="number"
        value={formik.values.amount} onChange={formik.handleChange}
        error={!!formik.errors.amount} helperText={formik.errors.amount}
      />
      <TextField
        label="Date" name="date" type="date" InputLabelProps={{ shrink: true }}
        value={formik.values.date} onChange={formik.handleChange}
        error={!!formik.errors.date} helperText={formik.errors.date}
      />
      <Button type="submit" variant="contained">Add</Button>
    </Box>
  );
}
