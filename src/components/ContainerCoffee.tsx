import { useCoffeService } from '../hooks/useCoffeService';
import { CoffeeCardsList } from './CoffeeCardsList';
import { CoffeeFilterButtons } from './CoffeeFilterButtons';
import { ContainerContainerHeader } from './ContainerContainerHeader';

export const ContainerCoffee = () => {
  const { coffeDate } = useCoffeService();
  console.log('coffeDate', coffeDate);
  return (
    <div className="container-coffee">
      <ContainerContainerHeader />
      <CoffeeFilterButtons />
      <CoffeeCardsList coffeData={coffeDate} />
    </div>
  );
};
