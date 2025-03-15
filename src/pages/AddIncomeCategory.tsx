// src/pages/AddIncomeCategory.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { db } from '../services/firebase';
import CategoryForm from '../components/CategoryForm';
import { Container, Typography } from '@mui/material';

const AddIncomeCategory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onAddCategoryClick = async (categoryData: Omit<Category, 'id'>) => {
    setLoading(true);
    try {
      await push(ref(db, 'incomeCategories'), categoryData);
      console.log('Category added successfully');
      navigate('/add-income');
    } catch (error) {
      console.error('Error adding category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Создать категорию доходов
      </Typography>
      <CategoryForm onSubmit={onAddCategoryClick} loading={loading} />
    </Container>
  );
};

export default AddIncomeCategory;