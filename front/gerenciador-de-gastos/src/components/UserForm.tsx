import ButtonComponent from "./Button";

interface UserFormProps {
  onCancel: () => void; 
}

const UserForm: React.FC<UserFormProps> = ({onCancel}) => {

    const handleAddUser = () => {}

    const handleCancelUser = () => {
        onCancel();
    }

    return (
        <>
            <form action="submit">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Idade</span>
                    </div>
                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>


                <ButtonComponent variant="primary" onClick={handleAddUser} label="Adicionar" />
                <ButtonComponent variant="danger" onClick={handleCancelUser} label="Cancelar" />
            </form>
        </>
    )
}

export default UserForm;