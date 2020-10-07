import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Header from "./components/Header";
import axios from "axios";
import Pagination from "react-js-pagination";

function App() {
  
  const [countries, setCountries] = useState([]);
  const [limit, setLimit] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchCountry, setSearchCountry] = useState("");

  // Fetch the country list
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/rest-countries-v1/?page=${activePage}&limit=${limit}&country=${searchCountry}`,
        {
          headers: {
            Authorization: "d%#@##@ds93432$#%^#$#Dfdfd$%@#@)IOIkjkj&*$%^%GFGD",
          },
        }
      )
      .then((res) => {
        setCountries([]);
        for (let i = 0; i < res.data.data.data.length; i++) {
          setCountries((state) => [...state, res.data.data.data[i].name]);
        }
        setTotalCount(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit, activePage, searchCountry]);

  const displayCountries = countries.map((value, index) => {
    return (
      <ul key={index}>
        <li> {value}</li>
      </ul>
    );
  });

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
    if (event.target.value === "") {
      setSearchCountry("");
    }
    setActivePage(1);
  };

  // Configuring the limit of the countries name
  const changeLimitValue = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const handleChangePage = (number) => {
    setActivePage(number);
  };

  return (
    <React.Fragment>
      <Header />
      <MDBRow className="ml-0 mr-0">
        <MDBCol md="9" lg="9" sm="12">
          <div className="md-form mt-0">
            <input
              className="form-control"
              type="text"
              value={searchCountry}
              onChange={handleSearchChange}
              placeholder="Search Country"
              aria-label="Search"
              name="search"
              id="search"
              data-test="dateTab1"
            />
          </div>
        </MDBCol>
        <MDBCol md="3" lg="3" sm="12" className="word-wrap">
          <div className="form-group mt-2">
            <select
              className="form-control"
              value={limit}
              onChange={changeLimitValue}
              name="limit"
              id="limit"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="ml-0 mr-0">
        <MDBCol></MDBCol>
        <MDBCol>
          <h5 className="mt-5 ml-5">{displayCountries}</h5>
          <div className="mt-5">
            <Pagination
              id="pagination"
              activePage={activePage}
              itemsCountPerPage={limit}
              totalItemsCount={totalCount}
              pageRangeDisplayed={5}
              itemClass="page-item"
              linkClass="page-link"
              onChange={handleChangePage}
            />
            <input
              type="hidden"
              id="totalcount"
              name="totalcount"
              value={totalCount}
            />
          </div>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default App;
