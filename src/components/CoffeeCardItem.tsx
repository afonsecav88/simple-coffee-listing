import { CoffeeResponse } from '../interfaces/Coffee.inteface';

interface CoffeeCardItemProps {
  coffeeItem: CoffeeResponse;
}
export const CoffeeCardItem = ({ coffeeItem }: CoffeeCardItemProps) => {
  const { image, available, name, popular, price, rating, votes } = coffeeItem;
  return (
    <div className="card-container">
      {popular !== null && popular && <p className="popular-coffee">Popular</p>}
      <img src={image} alt={name} className="coffee-card-image" />
      <div className="card-name-price">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="card-rate-votes">
        {votes !== 0 ? (
          <img src="./Star_fill.svg" alt="rating" />
        ) : (
          <img src="./Star.svg" alt="rating" />
        )}
        <p>{rating} </p>{' '}
        {votes ? (
          <p className="card-votes-text">({votes} votes)</p>
        ) : (
          <p className="card-votes-text">No ratings</p>
        )}
        {votes === 122 && <p className="sold-out-coffe">Sold out</p>}
        {available}
      </div>
    </div>
  );
};
