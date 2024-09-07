import { CoffeeResponse } from '../interfaces/Coffee.inteface';

interface CoffeeCardItemProps {
  coffeeItem: CoffeeResponse;
}
export const CoffeeCardItem = ({ coffeeItem }: CoffeeCardItemProps) => {
  const { image, available, name, popular, price, rating, votes, id } =
    coffeeItem;
  return (
    <div className="">
      <div>
        <img src={image} alt={name} className="coffee-card-image" />
      </div>
      <div>
        {name}
        {price}
      </div>
      <div>
        {rating}
        {available}
      </div>
    </div>
  );
};
