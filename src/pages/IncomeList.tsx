import { useEffect } from 'react';
import { IncomeCard } from '../components/IncomeCard';
import { Container, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

export const IncomeList = () => {
  const { incomes, incomeCategories, deleteIncome } = useAppContext();

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Список доходов
      </Typography>
      {incomes.map((income) => {
        const category = incomeCategories.find((cat) => cat.id === income.categoryId);
        return (
          <IncomeCard
            key={income.id}
            income={income}
            categoryName={category?.name || 'Без категории'}
            onDelete={deleteIncome}
          />
        );
      })}
    </Container>
  );
};