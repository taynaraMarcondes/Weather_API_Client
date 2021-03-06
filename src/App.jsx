import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import Search from "./components/layout/Search/Search";
import Popular from "./components/layout/Popular/Popular";
import Latest from "./components/layout/Latest/Latest";
import Weather from "./components/layout/Weather/Weather";
import "./Theme.scss";
import "./App.scss";

const App = () => {
  const [data, setData] = useState({});
  const [latestSearches, setLatestSearches] = useState([]);
  const [popularSearches, setPopularSearches] = useState([]);

  return (
    <>
      <div className="App">
        <main className="main py-4">
          <Container>
            <Row>
              <Col className="title size2 py-2">Weather API</Col>
            </Row>

            <Search
              onSubmit={setData}
              latestSearches={setLatestSearches}
              popularSearches={setPopularSearches}
            />
            <Row className="mx-2 mx-md-auto justify-content-between">
              <Col xs="12" md="9" className="p-0">
                <div className="box p-4 mb-4 mb-md-0 mx-0 mr-4 rounded">
                  <span className="title2 size1">Information</span>
                  <hr />

                  <Weather data={data} />
                </div>
              </Col>
              <Col xs="12" md="3">
                <Latest data={data} latestSearches={latestSearches} />
                <Popular data={data} popularSearches={popularSearches} />
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
                      Taynara Marcondes P. Silva
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
  );
};

export default App;
