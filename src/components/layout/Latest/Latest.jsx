import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Latest.css';
import '../../../Theme.css'

const Latest = (props) => {
  return (
    <section>
      <Row>
        <Col className="box p-4 rounded">
          <span className="title2 size1">Latest searches</span>
          <hr />

          {localStorage.getItem("cities") != null ? (
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-100 text-light size0 mr-2"
                />
                <span>-</span>
              </li>
            </ul>
          ) : (
            <div className="text-default">No history.</div>
          )}
        </Col>
      </Row>
    </section>
  )
}

export default Latest