// src/pages/ExpenseList.tsx
import { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../services/firebase';
import { Expense, Category } from '../types';
import { ExpenseCard } from '../components/ExpenseCard';
import { Container, Typography } from '@mui/material';

export const ExpenseList = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    const categoriesRef = ref(db, 'expenseCategories');

    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const expenseList = Object.entries(data).map(([id, value]: [string, any]) => ({
          id,
          ...value,
        }));
        setExpenses(expenseList);
      }
    });

    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoryList = Object.entries(data).map(([id, value]: [string, any]) => ({
          id,
          ...value,
        }));
        setCategories(categoryList);
      }
    });
  }, []);

  const handleDelete = (id: string) => {
    remove(ref(db, `expenses/${id}`));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Список расходов
      </Typography>
      {expenses.map((expense) => {
        const category = categories.find((cat) => cat.id === expense.categoryId);
        return (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            categoryName={category?.name || 'Без категории'}
            onDelete={handleDelete}
          />
        );
      })}
    </Container>
  );
};