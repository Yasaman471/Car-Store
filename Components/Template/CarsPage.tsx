import styles from "./CarsPage.module.css";
import { CarType } from "../../data/carsData";

interface CarsPageProps {
  data: CarType[];
}

function CarsPage({ data }: CarsPageProps) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}

export default CarsPage;
