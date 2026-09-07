import Location from "../icons/Location";
import { CarType } from "../../data/carsData";
import styles from "./Card.module.css";
import Link from "next/link";

function Card(props: CarType) {
  const { id, name, model, year, distance, location, price, image } = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year}.${distance}km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
