// components/Button.tsx

// Definindo o que o botão pode receber (Props)
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const ButtonComponent = ({ label, onClick, variant = 'primary' }: ButtonProps) => {

  return (
    <button 
      type="button"
      onClick={onClick}
      className={`btn btn-${variant} shadow-sm fw-bold`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;