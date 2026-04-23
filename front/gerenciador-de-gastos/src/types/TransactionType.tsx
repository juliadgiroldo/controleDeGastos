import type { Category } from "./CategoryType";
import type { User } from "./UserType";

export enum TransactionPurpose { Revenue, Expense, Both }

export interface Transaction {
    id: number;
    description: string;
    value: number;
    transactionType: TransactionPurpose;
    category: string;
    user: string;
}