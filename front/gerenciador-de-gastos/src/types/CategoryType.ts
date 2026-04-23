import type { TransactionPurpose } from "./TransactionType";

export interface Category{
    id: number;
    description: string; 
    transactionType: TransactionPurpose
}