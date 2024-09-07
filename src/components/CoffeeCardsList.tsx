import { CoffeeResponse } from '../interfaces/Coffee.inteface';
import { CoffeeCardItem } from './CoffeeCardItem';

interface CoffeeCardsListProps {
  coffeData: CoffeeResponse[];
}

export const CoffeeCardsList = ({ coffeData }: CoffeeCardsListProps) => {
  return (
    <div className="coffee-cards-list">
      {coffeData.map((coffeeItem, index) => (
        <CoffeeCardItem key={coffeData[index].id} coffeeItem={coffeeItem} />
      ))}
    </div>
  );
};
