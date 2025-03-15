// src/types/index.ts
export interface Category {
    id: string;
    name: string;
  }
  
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