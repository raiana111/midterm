// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { IncomeList } from './pages/IncomeList';
import { ExpenseList } from './pages/ExpenseList';
import { Stats } from './pages/Stats';
import { AddIncome } from './pages/AddIncome';
import { AddExpense } from './pages/AddExpense';
import AddIncomeCategory from './pages/AddIncomeCategory'; // Новый импорт
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Калькулятор финансов
          </Typography>
          <Button color="inherit" component={Link} to="/incomes">
            Доходы
          </Button>
          <Button color="inherit" component={Link} to="/expenses">
            Расходы
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Статистика
          </Button>
          <Button color="inherit" component={Link} to="/add-income">
            Добавить доход
          </Button>
          <Button color="inherit" component={Link} to="/add-expense">
            Добавить расход
          </Button>
          <Button color="inherit" component={Link} to="/add-income-category">
            Добавить категорию доходов
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/incomes" element={<IncomeList />} />
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/add-income" element={<AddIncome />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/add-income-category" element={<AddIncomeCategory />} />
          <Route path="/" element={<Stats />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;