import { Card, CardContent, Typography, Button } from '@mui/material';
import { Income } from '../types';

interface IncomeCardProps {
  income: Income;
  categoryName: string;
  onDelete: (id: string) => void;
}

export const IncomeCard = ({ income, categoryName, onDelete }: IncomeCardProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{categoryName}</Typography>
        <Typography>Сумма: {income.amount} сом</Typography>
        <Typography color="text.secondary">
          Дата: {new Date(income.timestamp).toLocaleDateString()}
        </Typography>
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => onDelete(income.id)}
          sx={{ mt: 1 }}
        >
          Удалить
        </Button>
      </CardContent>
    </Card>
  );
};


