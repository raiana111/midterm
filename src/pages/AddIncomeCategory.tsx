import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from '../components/CategoryForm';
import { Container, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const AddIncomeCategory = () => {
  const { addIncomeCategory } = useAppContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onAddCategoryClick = (categoryData: Omit<Category, 'id'>) => {
    setLoading(true);
    const newCategory = { id: Date.now().toString(), ...categoryData };
    addIncomeCategory(newCategory);
    console.log('Category added:', newCategory);
    navigate('/add-income');
    setLoading(false);
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