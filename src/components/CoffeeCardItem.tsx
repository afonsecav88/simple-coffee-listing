import { useState } from 'react';
import { CoffeeResponse } from '../interfaces/Coffee.inteface';

interface CoffeeCardItemProps {
  coffeeItem: CoffeeResponse;
}
export const CoffeeCardItem = ({ coffeeItem }: CoffeeCardItemProps) => {
  const [vote, setVote] = useState();
  const { image, available, name, popular, price, rating, votes, id } =
    coffeeItem;
  return (
    <div className="card-container">
      <img src={image} alt={name} className="coffee-card-image" />
      <div className="card-name-price">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div>
        <p>
          <img src="src/assets/Star.svg" alt="rating" />
          {rating} (10 votes)
        </p>
        {available}
      </div>
    </div>
  );
};
