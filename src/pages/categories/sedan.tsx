import CarsList from "../../../Components/template/CarsList";
import carsData from "../../../data/carsData";

function Sedan() {
  const sedan = carsData.filter((car) => car.category === "sedan");
  return <CarsList data={sedan} />;
}

export default Sedan;
