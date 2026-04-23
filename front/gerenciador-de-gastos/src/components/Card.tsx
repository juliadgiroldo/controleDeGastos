import './Card.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header">
        <h5 className="title">{title}</h5>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;