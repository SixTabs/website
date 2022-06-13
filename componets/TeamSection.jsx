import { React, Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12"></div>
          </div>
          <div className="row team-portfolio"></div>
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
