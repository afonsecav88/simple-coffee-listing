import { Dispatch } from 'react';

interface CoffeeFilterButtonsProps {
  isAllProducts: boolean;
  setIsAllProducts: Dispatch<React.SetStateAction<boolean>>;
}

export const CoffeeFilterButtons = ({
  setIsAllProducts,
  isAllProducts,
}: CoffeeFilterButtonsProps) => {
  const handleClickAll = () => {
    setIsAllProducts(true);
  };
  const handleClickAvaliable = () => {
    setIsAllProducts(false);
  };

  return (
    <article className="coffee-filter-container">
      <button onClick={handleClickAll} className="coffee-filter-button">
        {/* style={{ backgroundColor: '#6F757C' }} */}
        All Products
      </button>
      <button onClick={handleClickAvaliable} className="coffee-filter-button">
        Available Now
      </button>
    </article>
  );
};
