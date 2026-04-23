import React from "react";
import { TransactionPurpose } from "../types/TransactionType";
import ButtonComponent from "./Button";

interface CatgeoryFormProps {
  onCancel: () => void;

}

const CategoryForm: React.FC<CatgeoryFormProps> = ({onCancel}: CatgeoryFormProps) => {


  return (
    <form >
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Descrição</span>
        </div>
        <input type="text" className="form-control" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Finalidade
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          defaultValue=""
        >
          <option value="" disabled></option>

          {Object.values(TransactionPurpose)
          .filter((key) => isNaN(Number(key))) 
          .map((transaction) => (
            <option key={transaction} value={transaction}>
              {transaction}
            </option>
          ))}
        </select>
      </div>

      <ButtonComponent variant="primary" label="Adicionar" />
      <ButtonComponent
        variant="danger"
        onClick={onCancel}
        label="Cancelar"
      />
    </form>
  );
};

export default CategoryForm;
