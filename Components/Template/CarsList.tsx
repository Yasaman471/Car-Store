import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../modules/Card";
import { useRouter } from "next/router";
import { CarType } from "../../data/carsData";

interface CarsListProps {
  data: CarType[];
}

function CarsList({ data }: CarsListProps) {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={clickHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
