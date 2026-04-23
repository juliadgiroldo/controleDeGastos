interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose} 
        style={{ zIndex: 1040 }}
      />

      <div 
        className="modal show" 
        style={{ display: 'block', zIndex: 1050 }} 
        role="dialog"
        tabIndex={-1}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Adicionar Familiar</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose} 
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;