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
    if (isAllProducts) return;
    setIsAllProducts(true);
  };
  const handleClickAvaliable = () => {
    if (!isAllProducts) return;
    setIsAllProducts(false);
  };

  return (
    <article className="coffee-filter-container">
      <button
        onClick={handleClickAll}
        className={`coffee-filter-button ${
          isAllProducts === true && 'isButtonActive'
        }`}>
        All Products
      </button>
      <button
        onClick={handleClickAvaliable}
        className={`coffee-filter-button ${
          isAllProducts !== true && 'isButtonActive'
        }`}>
        Available Now
      </button>
    </article>
  );
};
