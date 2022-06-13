import { React, Component } from "react";
import Image from "next/image";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="team-section" style={{ backgroundColor: "#37517e" }}>
        <div className="container" v style={{ padding: "10px" }}>
          <div className="row">
            <div
              className="col-md-12 col-sm-12"
              style={{ textAlign: "center", color: "white" }}
            >
              <h2>What is 6Tabs?</h2>
              <p style={{}}>
                Six tabs is a startup created by a group of 6 friends whose
                value is Professionalism, Integrity, Quality work, and
                Accessibility for all.
              </p>
            </div>
          </div>
          <div
            className="row team-portfolio"
            style={{ textAlign: "center", color: "white" }}
          >
            <div className="col-12" style={{ padding: "10px" }}>
              <h3>The Six Founders</h3>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Theonest Byagutangaza</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Marius Robert Rwandarushya</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Yves Byiringiro</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Patrick Iradukunda</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team"></div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Yves Habimana</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Patrick Ishimwe</h5>
            </div>
          </div>
          <div className="row goals-section">
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
