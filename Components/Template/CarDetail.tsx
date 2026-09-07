import { CarType } from "../../data/carsData";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

import styles from "./CarDetail.module.css";

function CarDetail(props: CarType) {
  const { name, model, year, distance, location, price, image, description } =
    props;

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          {" "}
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          {" "}
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          {" "}
          <Calender />
          <p>First registration</p>
          <span>{year}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          {" "}
          <Road />
          <p>Kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price</p>
          <span>{price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetail;
