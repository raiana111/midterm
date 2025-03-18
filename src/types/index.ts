export interface Income {
  id: string;
  amount: number;
  categoryId: string;
  timestamp: number;
}

export interface Expense {
  id: string;
  amount: number;
  categoryId: string;
  timestamp: number;
}

export interface Category {
  id: string;
  name: string;
}