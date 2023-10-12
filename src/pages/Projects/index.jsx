import React from "react";
import { Col, Container, NavbarBrand, Row } from "reactstrap";
import CTA from "../../assets/images/bg/1.jpg";
import Logo from "../../assets/images/SMART_LOGO.png";
import Feature1 from "../../assets/images/bg/1.jpg";
import Feature2 from "../../assets/images/bg/2.jpg";

const ProductList = [
  {
    id: "product 1",
    name: "Hospital Management Systems",
    discription:
      "Streamline healthcare operations for improved patient care and management",
    image: Feature1,
  },
  {
    id: "product 2",
    name: "Campus Management Systems",
    discription:
      "Optimize educational institutions' administration and student services.",
    image: Feature2,
  },
  {
    id: "product 3",
    name: "Enterprise Resource Planning",
    discription:
      "Enhance organizational efficiency and decision-making with our comprehensive ERP solutions.",
    image: Feature1,
  },
  {
    id: "product 4",
    name: "Property Management System",
    discription:
      "Simplify property management tasks and improve tenant satisfaction.",
    image: Feature2,
  },
  {
    id: "product 5",
    name: "HRMs (Human Resource Management Systems)",
    discription:
      "Efficiently manage your workforce, from recruitment to retirement.",
    image: Feature1,
  },
  {
    id: "product 6",
    name: "Payroll Systems",
    discription:
      "Enhance organizational efficiency and decision-making with our comprehensive ERP solutions.",
    image: Feature2,
  },
  {
    id: "product 7",
    name: "Supply Chain Management System",
    discription:
      "Streamline your supply chain processes for cost savings and improved delivery times",
    image: Feature1,
  },
  {
    id: "product 8",
    name: "Field-Force Management System",
    discription:
      "Optimize field operations for increased efficiency and customer satisfaction",
    image: Feature2,
  },
];

const Project = () => {
  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg nav-light fixed-top sticky"
      >
        <div className="container">
          <NavbarBrand className="navbar-brand" href="/">
            <span className="logo-light-mode">
              <img
                src={Logo}
                className="l-dark"
                width="70px"
                alt="smart-ideation"
              />
              <img
                src={Logo}
                className="l-light"
                width="70px"
                alt="smart-ideation"
              />
            </span>
            <img src={Logo} className="logo-dark-mode" alt="" />
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggleMenu}>
                <Icon.Menu />
              </NavbarToggler> */}

          {/* <Collapse
                className="navbar-collapse"
                isOpen={this.state.toggle}
                id="navbarSupportedContent"
              >
                <Nav
                  className="navbar-nav ms-auto mb-2 mb-lg-0"
                  id="navbar-navlist"
                >
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="service"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Services
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="project"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Portfolio
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="features"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Features
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="team"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Team
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      to="review"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Reviews
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      className="nav-link"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact Us
                    </Link>
                  </NavItem>
                </Nav>

                <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                  <li className="list-inline-item">
                    <a to="/auth-login" className="btn btn-primary">
                      Login
                    </a>
                  </li>
                </ul>
              </Collapse> */}
        </div>
      </nav>
      {/* CTA Start */}
      <section className="section" style={{ background: `url(${CTA}) center` }}>
        <div className="bg-overlay"></div>
        <Container>
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center">
                <h4 className="title text-white mb-3">
                  Driving Technological Excellence
                </h4>
                <p className="text-white-50 mx-auto para-desc mb-0">
                  At Smart Ideation, we envision a world where technology
                  seamlessly integrates with businesses, enhancing efficiency,
                  productivity, and overall performance. We strive to be at the
                  forefront of this digital transformation, pushing the
                  boundaries of what&apos;s possible.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/*  CTA End  */}
      {/*  PRoduct List */}
      <section className="section">
        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={5}>
              <div className="section-title">
                <h4 className="section-title mb-3 mb-lg-0">
                  Some of the most important <br /> Products
                </h4>
              </div>
            </Col>

            <Col lg={7}>
              <p className="text-muted para-desc mb-0">
                Launch your Bussienss from our expertise and our state of the
                art Product, which automate your all bussiness needs
              </p>
            </Col>
          </Row>
        </Container>
        {ProductList.map((product, index) => {
          if (index % 2 === 0 || index === 0) {
            return (
              <Container className="mt-100 mt-60" key={index + product.id}>
                <Row className="align-items-center">
                  <Col lg={6} md={6}>
                    <img
                      src={product.image}
                      className="img-fluid shadow-md rounded-md"
                      alt=""
                    />
                  </Col>

                  <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                      <h4 className="title mb-4">{product.name}</h4>
                      <p className="text-muted">{product.discription}</p>
                      <ul className="list-unstyled text-muted">
                        <li className="mb-1">
                          <span className="text-primary h5 me-2">
                            <i className="mdi mdi-check-circle align-middle"></i>
                          </span>
                          Digital Marketing Solutions for Tomorrow
                        </li>
                        <li className="mb-1">
                          <span className="text-primary h5 me-2">
                            <i className="mdi mdi-check-circle align-middle"></i>
                          </span>
                          Create your own skin to match your brand
                        </li>
                      </ul>
                      {/* <Link to="#" className="mt-3 text-primary">
                Find Out More <i className="uil uil-angle-right-b"></i>
              </Link> */}
                    </div>
                  </Col>
                </Row>
              </Container>
            );
          } else {
            return (
              <Container className="mt-100 mt-60" key={index + product.id}>
                <Row className="align-items-center">
                  <Col
                    lg={6}
                    md={6}
                    className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
                  >
                    <div className="section-title me-lg-5">
                      <h4 className="title mb-4">{product.name}</h4>
                      <p className="text-muted">{product.discription}</p>
                      <ul className="list-unstyled text-muted">
                        <li className="mb-1">
                          <span className="text-primary h5 me-2">
                            <i className="mdi mdi-check-circle align-middle"></i>
                          </span>
                          Digital Marketing Solutions for Tomorrow
                        </li>
                        <li className="mb-1">
                          <span className="text-primary h5 me-2">
                            <i className="mdi mdi-check-circle align-middle"></i>
                          </span>
                          Create your own skin to match your brand
                        </li>
                      </ul>
                      {/* <Link to="#" className="mt-3 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link> */}
                    </div>
                  </Col>

                  <Col lg={6} md={6} className="order-1 order-md-2">
                    <img
                      src={product.image}
                      className="img-fluid shadow-md rounded-md"
                      alt=""
                    />
                  </Col>
                </Row>
              </Container>
            );
          }
        })}
      </section>

      {/* Footer Start */}
      <footer className="bg-footer">
        <Container>
          <Row>
            <div className="col-12">
              <div className="footer-py-60">
                <Row>
                  <div className="col-lg-3 col-12 mb-lg-0 mb-md-4 pb-lg-0 pb-md-2">
                    <a to="#" className="logo-footer">
                      <img src={Logo} width="100px" alt="" />
                    </a>
                    <p className="mt-0 mb-0">
                      Start working with Motos that can provide everything you
                      need to generate awareness, drive traffic, connect.
                    </p>

                    <div className="pt-1 d-flex align-items-center">
                      <i className="mdi mdi-clock-outline text-primary me-2 fs-1"></i>
                      <div className="content">
                        <p className="mb-1 text-foot">Mon - Sat :</p>
                        <span className="text-light">10:00 AM To 07:30 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Our Services</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a to="#" className="text-foot">
                          <i className="mdi mdi-greater-than me-1"></i> Web
                          Development
                        </a>
                      </li>
                      <li>
                        <a to="#" className="text-foot">
                          <i className="mdi mdi-greater-than me-1"></i> Mobile
                          App Development
                        </a>
                      </li>
                      <li>
                        <a to="#" className="text-foot">
                          <i className="mdi mdi-greater-than me-1"></i> UI/UX
                          Design
                        </a>
                      </li>
                      <li>
                        <a to="#" className="text-foot">
                          <i className="mdi mdi-greater-than me-1"></i> Graphic
                          Design
                        </a>
                      </li>
                      <li>
                        <a to="#" className="text-foot">
                          <i className="mdi mdi-greater-than me-1"></i>{" "}
                          E-commerce
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Get In Touch</h5>

                    <p className="mt-4">
                      Office 201, 9C 13th commercial street,
                      <br />
                      D.H.A Phase 2 ext
                    </p>
                    <ul className="list-unstyled footer-list mt-3">
                      <li>
                        Phone:{" "}
                        <a href="tel:+152534-468-854" className="text-light">
                          +92-306-9771-771
                        </a>
                      </li>
                      <li>
                        Email:{" "}
                        <a
                          href="mailto:contact@example.com"
                          className="text-light"
                        >
                          contact@smartideation.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Newsletter</h5>
                    <p className="mt-4">
                      Sign up and receive the latest tips via email.
                    </p>
                    <form>
                      <Row>
                        <Col lg={12}>
                          <div className="foot-subscribe mb-3">
                            <label className="form-label">
                              Write your email{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="emailsubscribe"
                              className="form-control rounded"
                              placeholder="Your email : "
                              required
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submitsubscribe"
                              name="send"
                              className="btn btn-soft-primary"
                              value="Subscribe"
                            />
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Row>
              </div>
            </div>
          </Row>
        </Container>

        {/* <div className="footer-py-30 footer-bar">
              <div className="container text-center">
                <Row className="align-items-center justify-content-center">
                  <Col sm={8}>
                    <div className="text-sm-start">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Motos. Design & Develop
                        with <i className="mdi mdi-heart text-danger"></i> by{" "}
                        <a to="#" className="text-reset">
                          Shreethemes
                        </a>
                        .
                      </p>
                    </div>
                  </Col>

                  <div className="col-sm-4 mt-4 mt-sm-0">
                    <ul className="list-unstyled social-icon text-sm-end foot-social-icon mb-0">
                      <li className="list-inline-item">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-shopping-cart align-middle"
                            title="Buy Now"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-dribbble align-middle"
                            title="dribbble"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i className="uil uil-behance" title="Behance"></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i className="uil uil-linkedin" title="Linkedin"></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-facebook-f align-middle"
                            title="facebook"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-instagram align-middle"
                            title="instagram"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-twitter align-middle"
                            title="twitter"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-envelope align-middle"
                            title="email"
                          ></i>
                        </Link2>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link2 to="#" className="rounded">
                          <i
                            className="uil uil-file align-middle"
                            title="customization"
                          ></i>
                        </Link2>
                      </li>
                    </ul>
                  </div>
                </Row>
              </div>
            </div> */}
      </footer>
    </React.Fragment>
  );
};

export default Project;
