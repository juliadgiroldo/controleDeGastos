import type { User } from "../types/UserType";
import type { Column } from "../types/ColumnType";
import TableComponent from "../components/Table";
import ButtonComponent from "../components/Button";
import Card from "../components/Card";
import { useState } from "react";
import Modal from "../components/Modal";
import UserForm from "../components/UserForm";


const userColumns: Column[] = [
  { label: "Nome", key: "name" },
  { label: "Idade", key: "age" },
];

const UserPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);

  const users: User[] = [
    { id: 1, name: "João", age: 30 },
    { id: 2, name: "Maria", age: 25 },
  ];

  return (
    <>
      <Card title="Habitantes da casa">
        <ButtonComponent variant="primary" label="Adicionar familiar" onClick={() => setIsModalOpen(true)} />
        <TableComponent columns={userColumns} data={users} actions={true} />
      </Card>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserForm onCancel={handleClose}/>
      </Modal>
    </>
  );
};

export default UserPage;
