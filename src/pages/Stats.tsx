import { useEffect } from 'react';
import { Income, Expense, Category } from '../types/index';
import { StatsCard } from '../components/StatsCard';
import { Container, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

export const Stats = () => {
  const { incomes, expenses, incomeCategories, expenseCategories } = useAppContext();

  useEffect(() => {
    console.log('Stats updated:', { incomes, expenses });
  }, [incomes, expenses]);

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const difference = totalIncome - totalExpense;

  const incomeByCategory = incomeCategories.map((cat) => ({
    category: cat.name,
    amount: incomes.filter((income) => income.categoryId === cat.id).reduce((sum, income) => sum + income.amount, 0),
  }));

  const expenseByCategory = expenseCategories.map((cat) => ({
    category: cat.name,
    amount: expenses.filter((expense) => expense.categoryId === cat.id).reduce((sum, expense) => sum + expense.amount, 0),
  }));

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Статистика
      </Typography>
      <StatsCard title="Доходы" amount={totalIncome} details={incomeByCategory} />
      <StatsCard title="Расходы" amount={totalExpense} details={expenseByCategory} />
      <Typography variant="h6" color={difference >= 0 ? 'success.main' : 'error.main'}>
        Баланс: {difference} сом
      </Typography>
    </Container>
  );
};



// import { useEffect, useState } from 'react';
// import { Income, Expense, Category } from '../types';
// import { StatsCard } from '../components/StatsCard';
// import { Container, Typography } from '@mui/material';

// // Пример данных с timestamp как числом
// const mockIncomes: Income[] = [
//   { id: '1', amount: 5000, categoryId: '1', timestamp: 1677654321 },
//   { id: '2', amount: 3000, categoryId: '2', timestamp: 1677654322 },
// ];
// const mockExpenses: Expense[] = [
//   { id: '1', amount: 2000, categoryId: '1', timestamp: 1677654323 },
//   { id: '2', amount: 1500, categoryId: '2', timestamp: 1677654324 },
// ];
// const mockIncomeCategories: Category[] = [
//   { id: '1', name: 'Зарплата' },
//   { id: '2', name: 'Фриланс' },
// ];
// const mockExpenseCategories: Category[] = [
//   { id: '1', name: 'Еда' },
//   { id: '2', name: 'Транспорт' },
// ];

// export const Stats = () => {
//   const [incomes, setIncomes] = useState<Income[]>([]);
//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [incomeCategories, setIncomeCategories] = useState<Category[]>([]);
//   const [expenseCategories, setExpenseCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     setIncomes(mockIncomes);
//     setExpenses(mockExpenses);
//     setIncomeCategories(mockIncomeCategories);
//     setExpenseCategories(mockExpenseCategories);
//   }, []);

//   const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
//   const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
//   const difference = totalIncome - totalExpense;

//   const incomeByCategory = incomeCategories.map((cat) => ({
//     category: cat.name,
//     amount: incomes
//       .filter((income) => income.categoryId === cat.id)
//       .reduce((sum, income) => sum + income.amount, 0),
//   }));

//   const expenseByCategory = expenseCategories.map((cat) => ({
//     category: cat.name,
//     amount: expenses
//       .filter((expense) => expense.categoryId === cat.id)
//       .reduce((sum, expense) => sum + expense.amount, 0),
//   }));

//   return (
//     <Container>
//       <Typography variant="h4" sx={{ my: 2 }}>
//         Статистика
//       </Typography>
//       <StatsCard
//         title="Доходы"
//         amount={totalIncome}
//         details={incomeByCategory}
//       />
//       <StatsCard
//         title="Расходы"
//         amount={totalExpense}
//         details={expenseByCategory}
//       />
//       <Typography variant="h6" color={difference >= 0 ? 'success.main' : 'error.main'}>
//         Баланс: {difference} сом
//       </Typography>
//     </Container>
//   );
// };