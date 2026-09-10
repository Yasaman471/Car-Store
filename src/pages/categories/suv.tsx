import CarsList from "../../../Components/template/CarsList";
import carsData from "../../../data/carsData";
function SUV() {
  const suv = carsData.filter((car) => car.category === "suv");
  console.log(suv);

  return <CarsList data={suv} />;
}

export default SUV;
