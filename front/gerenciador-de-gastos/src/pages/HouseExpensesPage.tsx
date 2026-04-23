import type { Column } from "../types/ColumnType";
import TableComponent from "../components/Table";
import Card from "../components/Card";

const houseExpensesColumns: Column[] = [
  { label: "Nome", key: "name" },
  { label: "Receita", key: "receita" },
  { label: "Despesa", key: "despesa" },
  { label: "Saldo", key: "saldo" },
];

const totalHouseExpensesColumns: Column[] = [
  { label: "Receita total", key: "receita" },
  { label: "Despesa total", key: "despesa" },
  { label: "Saldo Liquido", key: "saldo" },
];

const HouseExpensesPage: React.FC = () => {
  const houseExpenses = [
    { name: "João", receita: 300, despesa: 400, saldo: -100 },
  ];

  const TotalHouseExpenses = [{ receita: 300, despesa: 400, saldo: -100 }];

  return (
    <>
      <Card title="Gastos Individuais">
        <TableComponent
          columns={houseExpensesColumns}
          data={houseExpenses}
          actions={false}
        />
      </Card>

      <Card title="Gastos totais">
        <TableComponent
          columns={totalHouseExpensesColumns}
          data={TotalHouseExpenses}
          actions={false}
        />
      </Card>
    </>
  );
};

export default HouseExpensesPage;
