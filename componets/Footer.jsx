import { React, Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section
        className="footer container-fluid"
        style={{ backgroundColor: "#757285" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-3 social-media-icon"></div>
            <div
              className="col-3 contact"
              style={{ color: "white", fontWeight: 700 }}
            >
              <h5
                style={{
                  paddingLeft: "25px",
                  paddingTop: "25px",
                  paddingBottom: "15px",
                }}
              >
                Contacts
              </h5>
              <ul>
                <li>
                  <a href="#"> +250 789 876 578 </a>
                </li>
                <li>
                  <a href="#"> info@6tabs.com </a>
                </li>
              </ul>
            </div>
            <div
              className="col-3 address"
              style={{ color: "white", fontWeight: 700 }}
            >
              <h5
                style={{
                  paddingLeft: "25px",
                  paddingTop: "25px",
                  paddingBottom: "15px",
                }}
              >
                Address
              </h5>
              <ul>
                <li>
                  <a href="#"> Kigali, Rwanda </a>
                </li>
                <li>
                  <a href="#"> KG 231 st </a>
                </li>
              </ul>
            </div>
            <div
              className="col-3 links"
              style={{ color: "white", fontWeight: 700 }}
            >
              <h5
                style={{
                  paddingLeft: "25px",
                  paddingTop: "25px",
                  paddingBottom: "15px",
                }}
              >
                Links
              </h5>
              <ul>
                <li>
                  <a href="#"> About us </a>
                </li>
                <li>
                  <a href="#"> Services offered </a>
                </li>
                <li>
                  <a href="#"> Journal </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
