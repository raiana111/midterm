import { useEffect } from 'react';
import { ExpenseCard } from '../components/ExpenseCard';
import { Container, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

export const ExpenseList = () => {
  const { expenses, expenseCategories, deleteExpense } = useAppContext();

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Список расходов
      </Typography>
      {expenses.map((expense) => {
        const category = expenseCategories.find((cat) => cat.id === expense.categoryId);
        return (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            categoryName={category?.name || 'Без категории'}
            onDelete={deleteExpense}
          />
        );
      })}
    </Container>
  );
};