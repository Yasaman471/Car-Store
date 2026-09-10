import Categories from "../../Components/modules/Categories";
import SearchBar from "../../Components/modules/SearchBar";
import CarsPage from "../../Components/template/CarsPage";
import carsData from "../../data/carsData";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
