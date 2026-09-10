import { useRouter } from "next/router";
import CarsList from "../../../Components/template/CarsList";
import carsData from "../../../data/carsData";

function FilteredCars() {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const minNum = min ? Number(min) : 0;
  const maxNUm = max ? Number(max) : Infinity;

  const filterData = carsData.filter(
    (item) => item.price > minNum && item.price < maxNUm,
  );

  if (!filterData.length) return <h1>Not Found</h1>;

  return <CarsList data={filterData} />;
}

export default FilteredCars;
