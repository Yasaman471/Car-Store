import CarsList from "../../../Components/template/CarsList";
import carsData from "../../../data/carsData";

function hatchback() {
  const hatchback = carsData.filter((car) => car.category === "hatchback");
  return <CarsList data={hatchback} />;
}

export default hatchback;
