import React from "react"
import { Row, Col, Container} from "reactstrap"
import Search from "./components/layout/Search/Search"
import Popular from "./components/layout/Popular/Popular"
import Latest from "./components/layout/Latest/Latest"
import Weather from "./components/layout/Weather/Weather"
import "./App.css"
import './Theme.css'

const App = () => {
  return (
    <>
      <div className="App">
        <main className="main py-4">
          <Container>
            {/* Title */}
            <Row className="">
              <Col className="title size2 py-2">Weather API</Col>
            </Row>

            {/* Search bar */}
            <Search />

            {/* Main Info */}
            <Row className="mx-2 mx-md-auto justify-content-between">
              <Col xs="12" md="8" className="box p-4 mb-4 mb-md-0 rounded">
                <span className="title2 size1">Information</span>
                <hr />

                {/* Show data */}
                <Weather/>
              </Col>
              <Col xs="12" md="3">
                {/* History section */}
                <Latest/>

                {/* Popular section */}
                <Popular />
              </Col>
            </Row>
          </Container>

          <footer className="mt-5 justify-content-center">
            <div className="container">
              <hr className="w-75" />
              <div className="mt-3">
                <div>
                  <span>
                    ©2021
                    <a
                      href="https://linkedin.com/in/taynaraMarcondes/"
                      target="_blank"
                    >
                      {" "}
                      Taynara Marcondes P. Silva{" "}
                    </a>
                    - All rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
