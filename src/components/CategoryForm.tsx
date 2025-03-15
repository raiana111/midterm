// src/components/CategoryForm.tsx
import React, { useState } from 'react';
import { Category } from '../types';
import { Button, Stack, TextField } from '@mui/material';

interface Props {
  onSubmit: (category: Omit<Category, 'id'>) => void; // 'id' добавит Firebase
  loading?: boolean;
}

const CategoryForm = ({ onSubmit, loading = false }: Props) => {
  const [category, setCategory] = useState<Omit<Category, 'id'>>({
    name: '',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(category);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Stack spacing={2}>
        <TextField
          required
          fullWidth
          name="name"
          label="Название категории"
          value={category.name}
          onChange={onChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={loading}
        >
          {loading ? 'Добавление...' : 'Добавить'}
        </Button>
      </Stack>
    </form>
  );
};

export default CategoryForm;