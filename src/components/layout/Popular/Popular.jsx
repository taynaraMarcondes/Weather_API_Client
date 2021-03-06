import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../../Theme.scss";
import "./Popular.scss";

const Popular = ({ data, popularSearches }) => {
  const [popular, setPopular] = useState([]);
  const qtd = 3;

  useEffect(() => {
    if (popularSearches?.length > 0) setPopular(popularSearches);
  }, [popularSearches]);

  useEffect(() => {
    if (popular.length === 0) setPopular(Array(qtd).fill());
  }, [popular]);

  return (
    <>
      <section className="mt-4">
        <Row>
          <Col className="box p-4 rounded">
            <span className="title2 size1">Popular</span>
            <hr />
            {popular?.length > 0 ? (
              <ul>
                {popular.map((el, key) => (
                  <li>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-100 text-light size0 mr-2"
                    />
                    <span>{el?.city ?? "-"}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-default">No history.</div>
            )}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Popular;
