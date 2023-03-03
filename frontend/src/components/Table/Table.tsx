
import "./Table.css";
import { Pagination } from "../Pagination/Pagination";
import { City, Country } from "../../types";

//#region TYPES
type TableProps = {
  /**
   * List of available cities.
   */
  readonly cities: City[];
  /**
   * The total count of cities available in the database.
   */
  readonly citiesTotalCount: number;
  /**
   * Event triggered when the user paginate forward.
   */
  readonly handleNextPagination: () => void;
  /**
   * Event triggered when the user paginate backward.
   */
  readonly handlePrevPagination: () => void;
  /**
   * Event triggered when the user paginate to a specific page.
   */
  readonly handleSpecificPagination: (from: number) => void;
  /**
   * The query parameters constraints for data fetching.
   */
  readonly queryParams: {
    readonly from: number;
    readonly limit: number;
  };
  /**
   * The user selected country.
   */
  readonly selectedCountry?: Country;
};
//#endregion

export const Table = (props: TableProps) => {
  const { cities, selectedCountry } = props;

  //#region RENDERING
  return (
    <div className={cities.length === 0 ? "cities-table-empty" : ""} id="cities-table-wrapper" data-testid="table">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Sub-country</th>
            <th>Geoname page</th>
          </tr>
        </thead>
        <tbody>
          {cities.length === 0
            ? <tr> no cities to display ... </tr>
            : cities.map((city) => (
              <tr key={city.geonameid} data-testid="city">
                <td>{city.name}</td>
                <td>{city.country}</td>
                <td>{city.subcountry}</td>
                <td>
                  <a href={`https://www.geonames.org/${city.geonameid}/`} target="_blank" rel="noreferrer">
                    Open
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination
        {...props}
        selectedCountryCitiesCount={selectedCountry?.count}
      />
    </div>
  );
  //#endregion
};
