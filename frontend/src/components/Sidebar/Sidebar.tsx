
import "./Sidebar.css";
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
}
//#endregion

export const Sidebar = (props: SidebarProps) => {
  const { countries, handleSelectCountry } = props;

  //#region RENDERING
  return (
    <div id="sidebar" data-testid="sidebar">
      <h2>Cities App</h2>
      <div onClick={() => handleSelectCountry({ name: "", count: 0 })}>
        All cities
      </div>
      {countries.length === 0
        ? <div> no countries to display ... </div>
        : countries.map(({ name, count }, index) => (
            <div
              key={`${name}_${index}`}
              onClick={() => (name && count) && handleSelectCountry({ name, count })}
              data-testid="country"
            >
              {name} ({count})
            </div>
          ))
      }
    </div>
  );
  //#endregion
};
