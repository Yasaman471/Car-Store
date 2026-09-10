import Categories from "../../Components/modules/Categories";
import CarsPage from "../../Components/template/CarsPage";
import carsData from "../../data/carsData";

export default function Home() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
