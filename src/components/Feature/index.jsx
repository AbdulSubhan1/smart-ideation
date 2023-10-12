import React, { Component } from "react";
import { Col, Container, Card, Row } from "reactstrap";
import { Link } from "react-router-dom";

// import Feature1 from "../../assets/images/bg/1.jpg";
// import Feature2 from "../../assets/images/bg/2.jpg";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: "service1",
          icon: "ballot-recount-outline",
          title: "Enterprise Resource Planning",
          description:
            "Enhance organizational efficiency and decision-making with our comprehensive ERP solutions.",
        },
        {
          id: "service2",
          icon: "cast-variant",
          title: "Field-Force Management System",
          description:
            "Optimize field operations for increased efficiency and customer satisfaction.",
        },
        {
          id: "service3",
          icon: "dolly",
          title: "Supply Chain Management System",
          description:
            "Streamline your supply chain processes for cost savings and improved delivery times.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/*  Services START  */}
        <section className="section pb-0" id="project">
          <Container>
            <Row className="justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h3 className="title mb-3">Our Products</h3>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </div>
            </Row>

            <Row>
              {this.state.services.map((item, key) => (
                <Col lg={4} md={6} className="mt-5 pt-4" key={key}>
                  <Card className="features feature-primary feature-shadow-md shadow rounded p-4 pt-5">
                    <div className="icon-style mt-n80 position-relative text-center shadow rounded bg-white mb-4">
                      <i className={"h4 mb-0 mdi mdi-" + item.icon}></i>
                    </div>
                    <div className="content">
                      <Link to="#" className="title text-dark h5">
                        {item.title}
                      </Link>
                      <p className="text-muted mt-3">{item.description}</p>
                      {/* <Link to="#" className="text-dark title">
                        Find More <i className="mdi mdi-arrow-right"></i>{" "}
                      </Link> */}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center">
                <div className="mt-2 pt-2">
                  <Link to="/products" className="btn btn-primary">
                    Explore <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* <Row>
              <Col lg={5}>
                <div className="section-title">
                  <h4 className="section-title mb-3 mb-lg-0">
                    Some of the most importent <br /> things in this tools
                  </h4>
                </div>
              </Col>

              <Col lg={7}>
                <p className="text-muted para-desc mb-0">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
              </Col>
            </Row> */}
          </Container>

          {/* <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img
                  src={Feature1}
                  className="img-fluid shadow-md rounded-md"
                  alt=""
                />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Great Product Analytics With Real Problem
                  </h4>
                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts. If the distribution of letters visual impact.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <Link to="#" className="mt-3 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container> */}

          {/* <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={6}
                md={6}
                className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title me-lg-5">
                  <h4 className="title mb-4">
                    Get Notified About Importent Email
                  </h4>
                  <p className="text-muted">
                    This prevents repetitive patterns from impairing the overall
                    visual impression and facilitates the comparison of
                    different typefaces. Furthermore, it is advantageous when
                    the dummy text is relatively realistic.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <Link to="#" className="mt-3 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>

              <Col lg={6} md={6} className="order-1 order-md-2">
                <img
                  src={Feature2}
                  className="img-fluid shadow-md rounded-md"
                  alt=""
                />
              </Col>
            </Row>
          </Container> */}
        </section>
      </React.Fragment>
    );
  }
}
export default Feature;
