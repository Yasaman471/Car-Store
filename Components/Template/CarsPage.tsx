import styles from "./CarsPage.module.css";
import { CarType } from "../../data/carsData";
import Card from "../modules/Card";

interface CarsPageProps {
  data: CarType[];
}

function CarsPage({ data }: CarsPageProps) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
