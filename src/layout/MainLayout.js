import React, {Component} from "react";
import Header from "../components/Header/Header";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="about-page">
          <Header />

          <br/>
          <br/>

          <main>
            {this.props.children}
          </main>
      </div>
    );
  }
}

MainLayout.propTypes = {};
