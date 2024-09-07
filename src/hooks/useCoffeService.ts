import { useEffect, useState } from 'react';
import { coffeService } from '../services/Coffee.service';
import { CoffeeResponse } from '../interfaces/Coffee.inteface';

export const useCoffeService = () => {
  const [coffeDate, setCoffeeData] = useState<CoffeeResponse[]>([]);

  useEffect(() => {
    coffeService()
      .then((data) => {
        if (!data) return;
        else {
          setCoffeeData(data);
        }
      })
      .catch(() => {
        throw new Error('Errot');
      });
  }, []);
  return { coffeDate };
};
