import { useState } from 'react';
import { useAvailableProduct } from '../hooks/useAvailableProduct';
import { useCoffeService } from '../hooks/useCoffeService';
import { CoffeeCardsList } from './CoffeeCardsList';
import { CoffeeFilterButtons } from './CoffeeFilterButtons';
import { ContainerContainerHeader } from './ContainerContainerHeader';

export const ContainerCoffee = () => {
  const { coffeData } = useCoffeService();
  const [isAllProducts, setIsAllProducts] = useState(true);
  const coffeDataFilter = useAvailableProduct(isAllProducts);

  const coffeeProducts = () => {
    return isAllProducts ? coffeData : coffeDataFilter;
  };

  return (
    <div className="container-coffee">
      <ContainerContainerHeader />
      <CoffeeFilterButtons
        isAllProducts={isAllProducts}
        setIsAllProducts={setIsAllProducts}
      />
      <CoffeeCardsList coffeData={coffeeProducts()} />
    </div>
  );
};
