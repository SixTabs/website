import { React, Component } from "react";
import Image from "next/image";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row" style={{ padding: "20px" }}>
                <div className="col-md-12" style={{ textAlign: "left" }}>
                  <h2>Accessible, usable and secure systems</h2>
                </div>
                <div className="col-md-12" style={{ textAlign: "left" }}>
                  <p>
                    Did you know that around 15% of the world’s population or if
                    you want 1 billion and 50 millions of people in the worls
                    have some sort of
                    disability?(https://apps.who.int/iris/handle/10665/44575)It
                    is important to think about it when creating applications.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
