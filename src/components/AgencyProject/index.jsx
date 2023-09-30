import React, { Component } from "react";
import * as Icon from "react-feather";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Col, Row, Card, CardBody, Container } from "reactstrap";
import { Link } from "react-router-dom";

import Image1 from "../../assets/images/bg/1.jpg";
import Image2 from "../../assets/images/bg/2.jpg";
import Image3 from "../../assets/images/bg/3.jpg";
import Image4 from "../../assets/images/bg/4.jpg";
import Image5 from "../../assets/images/bg/5.jpg";
import Image6 from "../../assets/images/bg/6.jpg";
import Image7 from "../../assets/images/bg/7.jpg";
import Image8 from "../../assets/images/bg/8.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

/**
 * Agency project section
 */
class AgencyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          image: Image1,
          title: "Mockup Collection",
          subtext: "Branding",
        },
        {
          image: Image2,
          title: "Mockup Collection",
          subtext: "Designing",
        },
        {
          image: Image3,
          title: "Abstract images",
          subtext: "Abstract",
        },
        {
          image: Image4,
          title: "Yellow bg with Books",
          subtext: "Books",
        },
        {
          image: Image5,
          title: "Company V-card",
          subtext: "V-card",
        },
        {
          image: Image6,
          title: "Mockup box with paints",
          subtext: "Photography",
        },
        {
          image: Image7,
          title: "Coffee cup",
          subtext: "Cups",
        },
        {
          image: Image8,
          title: "Pen and article",
          subtext: "Article",
        },
      ],
      isOpen: false,
      photoIndex: 0,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        {/* Project Start  */}
        <section className="section" id="portfolio">
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-3">Our Works & Projects</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.projectList.map((item, index) => (
                <Col lg={3} md={6} className="col-12 mt-4 pt-2" key={index}>
                  <Card className="border-0 project project-primary position-relative d-block overflow-hidden rounded">
                    <CardBody className="p-0">
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt="workimage"
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <h6 className="mb-0">
                          <Link to="#" className="text-white title">
                            {item.title}
                          </Link>
                        </h6>
                        <p className="text-light tag mb-0">{item.subtext}</p>
                      </div>
                      <div className="icons text-center">
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({ isOpen: true, photoIndex: index })
                          }
                          className="btn btn-icon btn-pills lightbox"
                        >
                          <Icon.Camera className="fea icon-sm image-icon" />
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>
        </section>
        {/* Project End  */}
      </React.Fragment>
    );
  }
}
export default AgencyProject;
