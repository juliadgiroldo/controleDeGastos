import ButtonComponent from "../components/Button";
import TableComponent from "../components/Table";
import type { Transaction } from "../types/TransactionType";
import type { Column } from "../types/ColumnType";
import Card from "../components/Card";
import { useState } from "react";
import Modal from "../components/Modal";
import TransactionForm from "../components/TransactionForm";
import type { Category } from "../types/CategoryType";

const TransactionPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);

  const transactionColumns: Column[] = [
    { label: "description", key: "description" },
    { label: "value", key: "value" },
    { label: "transactionType", key: "transactionType" },
    { label: "category", key: "category" },
    { label: "user", key: "user" },
  ];

  // const handleCreate(): Transaction => {
  //     const data = service.create();
  //     return response;
  // }
  const transactions: Transaction[] = [
    {
      id: 1,
      description: "description 1",
      value: 30,
      transactionType: 1,
      category: "category",
      user: "user",
    },
  ];

  const categories: Category[] = [
    {
      id: 1,
      description: "description 1",
      transactionType: 1,
    }];

  return (
    <>
      <Card title="Transações">
        <ButtonComponent variant="primary" label="Adicionar Transação" onClick={() => setIsModalOpen(true)}/>
        <TableComponent
          columns={transactionColumns}
          data={transactions}
          actions={false}
        />
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TransactionForm onCancel={handleClose} category={categories} />
      </Modal>
    </>
  );
};

export default TransactionPage;
