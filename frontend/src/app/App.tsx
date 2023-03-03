
import "./App.css";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Table } from "../components/Table/Table";
import { City, Country } from "../types";

const App = () => {

  //#region STATES
  const [cities, setCities] = useState<City[] | null>(null);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [citiesTotalCount, setCitiesTotalCount] = useState(NaN);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "",
    count: NaN,
  });
  const [queryParams, setQueryParams] = useState({
    from: 0,
    limit: 100,
  });
  //#endregion

  //#region FETCH
  useEffect(
    () => {
      fetch("http://localhost:3001/api/countries")
        .then((response) => response.json())
        .then(setCountries)
        .catch((e) => console.log(e));

      return () => setCountries(null);
    },
    [],
  );
  useEffect(
    () => {
      const fetchURL = `http://localhost:3001/api/cities?from=${queryParams.from}&limit=${queryParams.limit}`
      
      fetch(selectedCountry?.name ? `${fetchURL}&country=${selectedCountry.name}` : fetchURL)
        .then((response) => response.json())
        .then(setCities)
        .catch((e) => console.log(e));

      return () => setCities(null);
    },
    [selectedCountry, queryParams],
  );
  useEffect(
    () => {
      fetch("http://localhost:3001/api/count/cities")
        .then((response) => response.json())
        .then(setCitiesTotalCount)
        .catch((e) => console.log(e));

      return () => setCitiesTotalCount(NaN);
    },
    [],
  );
  //#endregion

  //#region EVENTS
  const handleSelectCountry = (country: Country) => {setSelectedCountry(country); setQueryParams({ from: 0, limit: 100 })};
  const handlePrevPagination = () => setQueryParams((prevState) => ({
    ...prevState,
    from: ((prevState.from - prevState.limit) < 0) ? 0 : (prevState.from - prevState.limit)
  }));
  const handleSpecificPagination = (from: number) => setQueryParams((prevState) => ({ ...prevState, from }));
  const handleNextPagination = () => setQueryParams((prevState) => ({ ...prevState, from: (prevState.from + prevState.limit) }));
  //#endregion

  //#region RENDERING
  if (cities && countries) {
    return (
      <div className="App">
        <Sidebar countries={countries} handleSelectCountry={handleSelectCountry} />
        <Table
          cities={cities}
          citiesTotalCount={citiesTotalCount}
          handleNextPagination={handleNextPagination}
          handlePrevPagination={handlePrevPagination}
          handleSpecificPagination={handleSpecificPagination}
          queryParams={queryParams}
          selectedCountry={selectedCountry}
        />
      </div>
    )
  } else {
    return null
  }
  //#endregion
}

export default App;
