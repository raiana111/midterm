import { Card, CardContent, Typography } from '@mui/material';

interface StatsCardProps {
  title: string;
  amount: number;
  details: { category: string; amount: number }[];
}

export const StatsCard = ({ title, amount, details }: StatsCardProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">Всего: {amount} сом</Typography>
        {details.map((detail, index) => (
          <Typography key={index}>
            {detail.category}: {detail.amount} сом
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};