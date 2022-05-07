import React from 'react'
import './navbar.css'
import {Container, Col, Row} from 'react-bootstrap'
import Socials from './Socials';

function Navbar() {
    return (
        <>
        <Socials/>
        <div className='cont'>
          <Container>
            <Row>
              <Col>
                  <div className='conl'>
                    <div className='text'>
                        <span className='boldtxt'>S</span>ustainable<br/><span className='boldtxt'>T</span>ransparent<br/><span className='boldtxt'>C</span>onsistent Investments
                    </div>
                    <button className='btnenter'> Enter App</button>
                  </div>
             
              </Col>
              <Col>
              
              </Col>
            </Row>
          </Container>

        </div>
        </>
    )
}

export default Navbar;