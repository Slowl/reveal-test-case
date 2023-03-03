
import "./Sidebar.css";
import { FiRotateCcw } from 'react-icons/fi';
import { Country } from "../../types";

//#region TYPES
type SidebarProps = {
  /**
   * List of available countries to display.
   */
  readonly countries: Country[];
  /**
   * Event triggered when the user click to select a country from the list.
   */
  readonly handleSelectCountry: (country: Country) => void;
  /**
   * The user selected country.
   */
  readonly selectedCountry?: Country;
}
//#endregion

export const Sidebar = (props: SidebarProps) => {
  const { countries, handleSelectCountry, selectedCountry } = props;

  //#region RENDERING
  return (
    <div id="sidebar" data-testid="sidebar">
      <h2>Cities App</h2>
      <div
        className={selectedCountry?.name ? "button" : "button button-disabled"}
        onClick={() => selectedCountry?.name ? handleSelectCountry({ name: "", count: 0 }) : undefined}
      >
        All cities <FiRotateCcw />
      </div>
      {countries.length === 0
        ? <div> no countries to display ... </div>
        : countries.map(({ name, count }, index) => (
            <div
              className={selectedCountry?.name === name ? "country country-selected" : "country"}
              data-testid="country"
              key={`${name}_${index}`}
              onClick={() => (name && count) && handleSelectCountry({ name, count })}
            >
              {name} ({count})
            </div>
          ))
      }
    </div>
  );
  //#endregion
};
