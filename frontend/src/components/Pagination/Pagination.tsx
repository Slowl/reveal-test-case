
import "./Pagination.css";

//#region TYPES
type PaginationProps = {
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
    readonly limit: number
  };
  /**
   * The number of cities available for a selected country.
   */
  readonly selectedCountryCitiesCount?: number;
}
//#endregion

export const Pagination = (props: PaginationProps) => {
  const {
    citiesTotalCount,
    handleNextPagination,
    handlePrevPagination,
    handleSpecificPagination,
    queryParams,
    selectedCountryCitiesCount,
  } = props;

  const citiesStartingPointRange = (queryParams.from + 1);
  const citiesEndingPointRange = selectedCountryCitiesCount && ((queryParams.from + queryParams.limit) < selectedCountryCitiesCount)
    ? (queryParams.from + queryParams.limit)
    : selectedCountryCitiesCount
      ? selectedCountryCitiesCount
      : ((queryParams.from + queryParams.limit) < citiesTotalCount)
        ? (queryParams.from + queryParams.limit)
        : citiesTotalCount;
  const lastCitiesStartingPointRange = selectedCountryCitiesCount
    ? (selectedCountryCitiesCount - queryParams.limit)
    : (citiesTotalCount - queryParams.limit);

  //#region RENDERING
  return (
    <div id="pagination" data-testid="pagination">
      <div>
        <div onClick={() => handleSpecificPagination(0)}>
          start
        </div>
        <div onClick={(citiesStartingPointRange === 1) ? undefined : handlePrevPagination}>
          prev
        </div>
      </div>
      <div>
        {citiesStartingPointRange} - {citiesEndingPointRange}
        {' out of '}
        {selectedCountryCitiesCount ? selectedCountryCitiesCount : citiesTotalCount}
      </div>
      <div>
        <div
          onClick={((citiesEndingPointRange === selectedCountryCitiesCount) || (citiesEndingPointRange === citiesTotalCount))
            ? undefined
            : handleNextPagination
          }
        >
          next
        </div>
        <div 
          onClick={() => ((citiesEndingPointRange === selectedCountryCitiesCount) || (citiesEndingPointRange === citiesTotalCount))
            ? undefined
            : handleSpecificPagination(lastCitiesStartingPointRange)
          }
        >
          end
        </div>
      </div>
    </div>
  );
  //#endregion
};
