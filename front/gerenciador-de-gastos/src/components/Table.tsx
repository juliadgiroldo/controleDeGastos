// components/TableComponent.tsx
import type { Column } from "../types/ColumnType";

interface TableProps<T> {
  columns: Column[];
  actions: boolean;
  data: T[];
}

// O <T extends Record<string, any>> permite que a tabela aceite qualquer objeto que tenha chaves
const TableComponent = <T extends Record<string, any>>({ 
  columns, 
  actions, 
  data 
}: TableProps<T>) => {
  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} scope="col">{col.label}</th>
          ))}
          {actions && <th scope="col" className="text-center">Ações</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          // Usamos item.id se existir, senão o index
          <tr key={item.id || rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                {/* Acessamos a chave de forma segura */}
                {String(item[col.key] ?? "")}
              </td>
            ))}
            
            {actions && (
              <td className="text-center">
                <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                <button className="btn btn-sm btn-outline-danger">Excluir</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;