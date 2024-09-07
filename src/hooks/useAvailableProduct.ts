import { useCoffeService } from './useCoffeService';

export const useAvailableProduct = (isAllProducts: boolean) => {
  const { coffeData } = useCoffeService();
  if (isAllProducts) return coffeData;
  else {
    return coffeData.filter((coffee) => coffee.available !== false);
  }
};
