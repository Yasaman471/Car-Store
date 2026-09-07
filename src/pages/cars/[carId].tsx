import { useRouter } from "next/router";
import carsData from "../../../data/carsData";
import CarDetail from "../../../Components/template/CarDetail";

function CarDetailes() {
  const route = useRouter();
  const { carId } = route.query || [];

  const idAsNumber = Number(carId);

  const DetailesOfCar = carsData.find((item) => item.id === idAsNumber);
  //   const DetailesOfCar = carsData[idAsNumber - 1];
  console.log(DetailesOfCar);

  return <CarDetail {...DetailesOfCar} />;
}

export default CarDetailes;
