import React from "react"
import { Row, Col } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./Popular.css"
import '../../../Theme.css'

const Popular = (props) => {
  return (
    <>
      <section className="mt-4">
        <Row>
          <Col className="box p-4 rounded">
            <span className="title2 size1">Popular</span>
            <hr />
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-100 text-light size0 mr-2"
                />
                <span>-</span>
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Popular