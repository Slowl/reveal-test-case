import { render, screen } from "@testing-library/react";
import App from "./App";
import fetchMock from "jest-fetch-mock"
import { act } from "react-dom/test-utils";

const fakeCountriesData = [
  {
    "name": "Afghanistan",
    "count": 2
  },
  {
    "name": "Aland Islands",
    "count": 1
  },
];

const fakeCitiesData = [
  {
    "country": "Afghanistan",
    "geonameid": 3040051,
    "name": "one random city",
    "subcountry": "azertyuiop"
  },
  {
    "country": "Afghanistan",
    "geonameid": 3041563,
    "name": "second random city",
    "subcountry": "qsdfghjklm"
  },
  {
    "country": "Aland Islands",
    "geonameid": 3041565,
    "name": "third random city",
    "subcountry": "wxcvbn"
  },
];

describe(
  "App feature",
  () => {

    beforeEach(() => {
      fetchMock.resetMocks()
    });

    test("should display the Sidebar, Table and Pagination components", async () => {

      await act(async () => {
        fetchMock.mockResponseOnce(JSON.stringify(fakeCountriesData));
        fetchMock.mockResponseOnce(JSON.stringify(fakeCitiesData));
        fetchMock.mockResponseOnce(JSON.stringify(3));
        render(<App />);
      });

      const sideBar = screen.getByTestId("sidebar");
      const table = screen.getByTestId("table");
      const pagination = screen.getByTestId("pagination");

      expect(sideBar).toBeInTheDocument();
      expect(table).toBeInTheDocument();
      expect(pagination).toBeInTheDocument();

    })
  }
)
