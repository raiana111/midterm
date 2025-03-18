import { useState } from 'react';
import { Container, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export const AddExpense = () => {
  const { expenseCategories, addExpense } = useAppContext();
  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!categoryId || !amount) return;

    const expenseData = {
      id: Date.now().toString(),
      categoryId,
      amount: Number(amount),
      timestamp: Date.now(),
    };

    addExpense(expenseData);
    navigate('/expenses');
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Добавить расход
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Категория</InputLabel>
        <Select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          {expenseCategories.length === 0 ? (
            <MenuItem disabled>Нет категорий</MenuItem>
          ) : (
            expenseCategories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Сумма"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Добавить
      </Button>
    </Container>
  );
};