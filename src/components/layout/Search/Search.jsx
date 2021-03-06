/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../../../Theme.scss";
import "./Search.scss";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather`
      );

      if (response.status === 200) {
        const latestSearches = response.data?.data?.latestSearches;
        const popularSearches = response.data?.data?.popularSearches;

        console.log("popularSearches", popularSearches);

        props?.latestSearches(latestSearches);
        props?.popularSearches(popularSearches);
      } else {
        throw response.data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const persistData = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/weather/${data.name}`,
        { data: data }
      );

      if (response.status !== 200) {
        throw response.data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const search = async (e) => {
    if (e.key === "Enter" || e === "btn") {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );

        if (response.status === 200) {
          props?.onSubmit(response?.data);

          // send data to database
          persistData(response.data);
        } else {
          throw response.data;
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className="my-5">
        <Col xs="9" md="11" className="pr-0">
          <input
            type="text"
            className="searchBar w-100 py-2 text-center rounded-left"
            placeholder="Find city ..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </Col>
        <Col xs="3" md="1" className="pl-0">
          <div
            className="searchField w-100 h-100 rounded-right"
            onClick={() => search("btn")}
          >
            <FontAwesomeIcon icon={faSearch} className="h-100" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Search;
