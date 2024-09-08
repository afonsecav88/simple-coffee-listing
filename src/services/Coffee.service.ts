import { CoffeeResponse } from '../interfaces/Coffee.inteface';

const apiCoffee = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`;
export const coffeService = async (): Promise<CoffeeResponse[] | undefined> => {
  try {
    const data = await fetch(apiCoffee);
    const resp = await data.json();
    return resp;
  } catch (error) {
    console.log('Ha ocurrido un error', error);
  }
};
