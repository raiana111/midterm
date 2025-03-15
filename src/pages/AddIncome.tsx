// // src/pages/AddIncome.tsx
// import { useEffect, useState } from 'react';
// import { ref, onValue, push } from 'firebase/database';
// import { db } from '../services/firebase';
// import { Category } from '../types';
// import { Container, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// export const AddIncome = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [categoryId, setCategoryId] = useState('');
//   const [amount, setAmount] = useState('');
//   const navigate = useNavigate();

//   // Загрузка категорий из Firebase
//   useEffect(() => {
//     const categoriesRef = ref(db, 'incomeCategories');
//     onValue(categoriesRef, (snapshot) => {
//       const data = snapshot.val();
//       console.log('Income categories from Firebase:', data);
//       if (data) {
//         const categoryList = Object.entries(data).map(([id, value]: [string, any]) => ({
//           id,
//           ...value,
//         }));
//         setCategories(categoryList);
//       } else {
//         setCategories([]);
//         console.log('No categories found in Firebase');
//       }
//     });
//   }, []);

//   // Обработка отправки формы
//   const handleSubmit = () => {
//     console.log('Button "Добавить" clicked');
//     console.log('Form values:', { categoryId, amount });

//     if (!categoryId || !amount) {
//       console.log('Validation failed: Category or amount is missing');
//       return;
//     }

//     const incomeData = {
//       categoryId,
//       amount: Number(amount),
//       timestamp: Date.now(),
//     };

//     console.log('Sending to Firebase:', incomeData);
//     push(ref(db, 'incomes'), incomeData)
//       .then(() => {
//         console.log('Income added successfully');
//         navigate('/incomes');
//       })
//       .catch((error) => {
//         console.error('Error adding income:', error);
//       });
//   };

//   return (
//     <Container>
//       <Typography variant="h4" sx={{ my: 2 }}>
//         Добавить доход
//       </Typography>
//       <FormControl fullWidth sx={{ mb: 2 }}>
//         <InputLabel>Категория</InputLabel>
//         <Select
//           value={categoryId}
//           onChange={(e) => {
//             setCategoryId(e.target.value);
//             console.log('Selected category:', e.target.value);
//           }}
//         >
//           {categories.length === 0 ? (
//             <MenuItem disabled>Нет категорий</MenuItem>
//           ) : (
//             categories.map((cat) => (
//               <MenuItem key={cat.id} value={cat.id}>
//                 {cat.name}
//               </MenuItem>
//             ))
//           )}
//         </Select>
//       </FormControl>
//       <TextField
//         fullWidth
//         label="Сумма"
//         type="number"
//         value={amount}
//         onChange={(e) => {
//           setAmount(e.target.value);
//           console.log('Entered amount:', e.target.value);
//         }}
//         sx={{ mb: 2 }}
//       />
//       <Button variant="contained" onClick={handleSubmit}>
//         Добавить
//       </Button>
//     </Container>
//   );
// };






import { useEffect, useState } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../services/firebase';
import { Category } from '../types';
import { Container, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddIncome = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const categoriesRef = ref(db, 'incomeCategories');
    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Income categories from Firebase:', data);
      if (data) {
        const categoryList = Object.entries(data).map(([id, value]: [string, any]) => ({
          id,
          ...value,
        }));
        setCategories(categoryList);
      } else {
        setCategories([]);
        console.log('No categories found in Firebase');
      }
    });
  }, []);

  const handleSubmit = () => {
    console.log('Button "Добавить" clicked');
    console.log('Form values:', { categoryId, amount });

    if (!categoryId || amount.trim() === '' || isNaN(Number(amount))) {
      console.log('Validation failed: Category or amount is missing or invalid');
      return;
    }

    const incomeData = {
      categoryId,
      amount: Number(amount),
      timestamp: Date.now(),
    };

    console.log('Sending to Firebase:', incomeData);
    push(ref(db, 'incomes'), incomeData)
      .then(() => {
        console.log('Income added successfully');
        navigate('/incomes');
      })
      .catch((error) => {
        console.error('Error adding income:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Добавить доход
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Категория</InputLabel>
        <Select
          value={categoryId}
          onChange={(e) => {
            setCategoryId(e.target.value);
            console.log('Selected category:', e.target.value);
          }}
        >
          {categories.length === 0 ? (
            <MenuItem disabled>Нет категорий</MenuItem>
          ) : (
            categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Сумма"
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          console.log('Entered amount:', e.target.value);
        }}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={() => {
        console.log('Button clicked');
        handleSubmit();
      }}>
        Добавить
      </Button>
    </Container>
  );
};
