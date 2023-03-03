
/**
 * Represents a country object.
 * - `name`: the name of the country.
 * - `count`: the number of cities the country have. 
 */
export type Country = {
  readonly name: string;
  readonly count: number;
  }

/**
 * Represents a city object.
 * - `name`: the name of the city.
 * - `country`: the country of the city.
 * - `subcountry`: the subcountry of the city.
 * - `geonameid`: the geoname id of the city.
 */
export type City = {
  name: string;
  country?: string;
  subcountry?: string;
  geonameid?: number;
};
