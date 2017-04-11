import React, {Component} from "react";
import Header from "../components/Header/Header";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="about-page">
        <Header />

        <br/>
        <br/>

        <main className="row">
          <div className="small-12 column">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

MainLayout.propTypes = {};
