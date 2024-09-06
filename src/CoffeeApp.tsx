import { Header } from './components/Header';
import '@fontsource-variable/dm-sans';
import './styles.css';
import { ContainerCoffee } from './components/ContainerCoffee';

function CoffeeApp() {
  return (
    <>
      <Header />
      <main className="container">
        <ContainerCoffee />
      </main>
    </>
  );
}

export default CoffeeApp;
