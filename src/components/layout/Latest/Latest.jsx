import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Latest.scss";
import "../../../Theme.scss";

const Latest = ({ data, latestSearches }) => {
  const [latest, setLatest] = useState([]);
  const qtd = 5;

  useEffect(() => {
    if (latestSearches?.length > 0) setLatest(latestSearches);
  }, [latestSearches]);

  useEffect(() => {
    setLatest((prev) => {
      let newArray = [...prev];

      // add data in the beginning
      newArray.unshift({
        city: data?.name,
        updated_at: new Date(),
      });

      // remove last element
      newArray.pop();

      return newArray;
    });
  }, [data]);

  useEffect(() => {
    if (latest.length === 0) setLatest(Array(qtd).fill());
  }, [latest]);

  return (
    <section>
      <Row>
        <Col className="box p-4 rounded">
          <span className="title2 size1">Latest searches</span>
          <hr />

          {latest?.length > 0 ? (
            <ul>
              {latest.map((el, key) => (
                <li key={key}>
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
  );
};

export default Latest;
