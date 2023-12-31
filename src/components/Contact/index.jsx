import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Start Contact  */}
        <section className="section" id="contact">
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Get In Touch !</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col lg={8} md={6} className="order-md-2 order-1 mt-4 pt-2">
                <div className="p-4 rounded shadow bg-white">
                  <form method="post" name="myForm">
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col md={6}>
                        <div className="mb-4">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name :"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-4">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email :"
                          />
                        </div>
                      </Col>

                      <div className="col-12">
                        <div className="mb-4">
                          <input
                            name="subject"
                            id="subject"
                            className="form-control"
                            placeholder="Subject :"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-4">
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 text-end">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </Row>
                  </form>
                </div>
              </Col>

              <Col
                lg={4}
                md={6}
                className="col-12 order-md-1 order-2 mt-4 pt-2"
              >
                <div className="me-lg-4">
                  <div className="d-flex">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-phone d-block rounded h4 mb-0"></i>
                    </div>

                    <div className="flex-1 ms-3">
                      <h5 className="mb-2">Phone</h5>
                      <Link to="tel:+152534-468-854" className="text-muted">
                        +92-306-9771-771
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-envelope d-block rounded h4 mb-0"></i>
                    </div>

                    <div className="flex-1 ms-3">
                      <h5 className="mb-2">Email</h5>
                      <Link
                        to="mailto:contact@smartideation.com"
                        className="text-muted"
                      >
                        contact@smartideation.com
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-map-marker d-block rounded h4 mb-0"></i>
                    </div>

                    <div className="flex-1 ms-3">
                      <h5 className="mb-2">Location</h5>
                      <p className="text-muted mb-2">
                        Office 201, 9C 13th commercial street, D.H.A Phase 2 ext
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* End Contact  */}
      </React.Fragment>
    );
  }
}

export default Contact;
