import { Card, CardContent, Typography, Button } from '@mui/material';
import { Expense } from '../types';

interface ExpenseCardProps {
  expense: Expense;
  categoryName: string;
  onDelete: (id: string) => void;
}

export const ExpenseCard = ({ expense, categoryName, onDelete }: ExpenseCardProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{categoryName}</Typography>
        <Typography>Сумма: {expense.amount} сом</Typography>
        <Typography color="text.secondary">
          Дата: {new Date(expense.timestamp).toLocaleDateString()}
        </Typography>
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => onDelete(expense.id)}
          sx={{ mt: 1 }}
        >
          Удалить
        </Button>
      </CardContent>
    </Card>
  );
};