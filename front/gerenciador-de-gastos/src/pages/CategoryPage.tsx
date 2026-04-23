import { useState } from "react";
import ButtonComponent from "../components/Button";
import Card from "../components/Card";
import TableComponent from "../components/Table";
import type { Category } from "../types/CategoryType";
import type { Column } from "../types/ColumnType";
import Modal from "../components/Modal";
import CategoryForm from "../components/CategoryForm";

const CategoryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const transactionColumns: Column[] = [
    { label: "description", key: "description" },
    { label: "transactionType", key: "transactionType" },
  ];

  const categories: Category[] = [
    {
      id: 1,
      description: "description 1",
      transactionType: 1,
    },
  ];
  return (
    <>
      <Card title="Categorias">
        <ButtonComponent variant="primary" label="Adicionar Categoria" onClick={() => setIsModalOpen(true)}/>
        <TableComponent
          columns={transactionColumns}
          data={categories}
          actions={false}
        />
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CategoryForm onCancel={handleClose} />
      </Modal>
    </>
  );
};

export default CategoryPage;
