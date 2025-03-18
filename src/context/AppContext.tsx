import { createContext, useContext, useState, ReactNode } from 'react';
import { Income, Expense, Category } from '../types';

interface AppContextType {
  incomes: Income[];
  addIncome: (income: Income) => void;
  deleteIncome: (id: string) => void;
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  incomeCategories: Category[];
  addIncomeCategory: (category: Category) => void;
  expenseCategories: Category[];
  addExpenseCategory: (category: Category) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [incomeCategories, setIncomeCategories] = useState<Category[]>([]);
  const [expenseCategories, setExpenseCategories] = useState<Category[]>([]);

  const addIncome = (income: Income) => setIncomes((prev) => [...prev, income]);
  const deleteIncome = (id: string) => setIncomes((prev) => prev.filter((i) => i.id !== id));
  const addExpense = (expense: Expense) => setExpenses((prev) => [...prev, expense]);
  const deleteExpense = (id: string) => setExpenses((prev) => prev.filter((e) => e.id !== id));
  const addIncomeCategory = (category: Category) =>
    setIncomeCategories((prev) => [...prev, category]);
  const addExpenseCategory = (category: Category) =>
    setExpenseCategories((prev) => [...prev, category]);

  return (
    <AppContext.Provider
      value={{
        incomes,
        addIncome,
        deleteIncome,
        expenses,
        addExpense,
        deleteExpense,
        incomeCategories,
        addIncomeCategory,
        expenseCategories,
        addExpenseCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};