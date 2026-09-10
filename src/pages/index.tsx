import AllButton from "../../Components/modules/AllButton";
import Categories from "../../Components/modules/Categories";
import SearchBar from "../../Components/modules/SearchBar";
import CarsPage from "../../Components/template/CarsPage";
import carsData from "../../data/carsData";

export default function Index() {
  const Cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={Cars} />
    </div>
  );
}
