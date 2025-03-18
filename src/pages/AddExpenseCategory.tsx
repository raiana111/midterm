import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from '../components/CategoryForm';
import { Container, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { Category } from '../types';

const AddExpenseCategory = () => {
  const { addExpenseCategory } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onAddCategoryClick = (categoryData: Omit<Category, 'id'>) => {
    setLoading(true);
    const newCategory = { id: Date.now().toString(), ...categoryData };
    addExpenseCategory(newCategory);
    console.log('Category added:', newCategory);
    navigate('/add-expense');
    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Создать категорию расходов
      </Typography>
      <CategoryForm onSubmit={onAddCategoryClick} loading={loading} />
    </Container>
  );
};

export default AddExpenseCategory;






