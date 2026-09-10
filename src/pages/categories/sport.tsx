import CarsList from "../../../Components/template/CarsList";
import carsData from "../../../data/carsData";
function sport() {
  const sport = carsData.filter((car) => car.category === "sport");

  return <CarsList data={sport} />;
}

export default sport;
