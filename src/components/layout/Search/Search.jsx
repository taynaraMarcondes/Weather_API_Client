import "./Search.css"
import '../../../Theme.css'
import React, { useState } from "react"
import axios from "axios"
import { Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = (props) => {
  const [query, setQuery] = useState("")
  const [setWeather] = useState({})

  const setHistory = (data) => {
    let city = data.name + ", " + data.sys.country
    let cities =
      localStorage.getItem("cities") != null
        ? JSON.parse(localStorage.getItem("cities"))
        : []

    if (cities.length === 3) cities.shift()

    cities.push(city)

    localStorage.setItem("cities", JSON.stringify(cities))
  }

  const search = (e) => {
    if (e.key === "Enter" || e === "btn") {
      axios
        .get(
          `api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setHistory(result)
          setQuery("")
          // console.log(result);
        })
    }
  }

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
  )
}

export default Search
