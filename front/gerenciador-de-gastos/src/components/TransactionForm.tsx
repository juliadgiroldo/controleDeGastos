import type { Category } from "../types/CategoryType";
import ButtonComponent from "./Button";

interface TransactionFormProps {
  onCancel: () => void;
  category: Category[]
}

const TransactionForm: React.FC<TransactionFormProps> = ({onCancel}: TransactionFormProps) => {
  const handleAddTransaction = () => {};

  return (
    <>
      <form action="submit">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Descrição
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Valor
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Categorias
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Escolha uma categoria...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Familiar
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <ButtonComponent
          variant="primary"
          onClick={handleAddTransaction}
          label="Adicionar"
        />
        <ButtonComponent
          variant="danger"
          onClick={onCancel}
          label="Cancelar"
        />
      </form>
    </>
  );
};

export default TransactionForm;
