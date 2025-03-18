import { useState } from 'react';
import { Container, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export const AddIncome = () => {
  const { incomeCategories, addIncome } = useAppContext();
  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!categoryId || amount.trim() === '' || isNaN(Number(amount))) {
      console.log('Validation failed');
      return;
    }

    const incomeData = {
      id: Date.now().toString(),
      categoryId,
      amount: Number(amount),
      timestamp: Date.now(),
    };

    addIncome(incomeData);
    console.log('Income added:', incomeData);
    navigate('/incomes');
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Добавить доход
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Категория</InputLabel>
        <Select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          {incomeCategories.length === 0 ? (
            <MenuItem disabled>Нет категорий</MenuItem>
          ) : (
            incomeCategories.map((cat) => (
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

