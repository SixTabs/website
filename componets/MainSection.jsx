import { React, Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <h1>This is the right part of Main</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
