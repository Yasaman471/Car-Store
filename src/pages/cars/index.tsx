import Categories from "../../../Components/modules/Categories";
import CarsPage from "../../../Components/template/CarsPage";
import carsData from "../../../data/carsData";

function Detailes() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Detailes;
