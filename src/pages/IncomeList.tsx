// src/pages/IncomeList.tsx
import { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../services/firebase';
import { Income, Category } from '../types';
import { IncomeCard } from '../components/IncomeCard';
import { Container, Typography } from '@mui/material';

export const IncomeList = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const incomesRef = ref(db, 'incomes');
    const categoriesRef = ref(db, 'incomeCategories');

    onValue(incomesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const incomeList = Object.entries(data).map(([id, value]: [string, any]) => ({
          id,
          ...value,
        }));
        setIncomes(incomeList);
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
    remove(ref(db, `incomes/${id}`));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Список доходов
      </Typography>
      {incomes.map((income) => {
        const category = categories.find((cat) => cat.id === income.categoryId);
        return (
          <IncomeCard
            key={income.id}
            income={income}
            categoryName={category?.name || 'Без категории'}
            onDelete={handleDelete}
          />
        );
      })}
    </Container>
  );
};