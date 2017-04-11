import React, {Component, PropTypes} from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="register-page">
        <form>
          <div className="row">
            <div className="large-12 columns">
              <label>Input Label
                <input type="text" placeholder="large-12.columns" />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="large-4 columns">
              <label>Input Label
                <input type="text" placeholder="large-4.columns" />
              </label>
            </div>
            <div className="large-4 columns">
              <label>Input Label
                <input type="text" placeholder="large-4.columns" />
              </label>
            </div>
            <div className="large-4 columns">
              <div className="row collapse">
                <label>Input Label</label>
                <div className="small-9 columns">
                  <input type="text" placeholder="small-9.columns" />
                </div>
                <div className="small-3 columns">
                  <span className="postfix">.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <label>Select Box
                <select>
                  <option value="husker">Husker</option>
                  <option value="starbuck">Starbuck</option>
                  <option value="hotdog">Hot Dog</option>
                  <option value="apollo">Apollo</option>
                </select>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <label>Choose Your Favorite</label>
              <input type="radio" name="pokemon" value="Red" id="pokemonRed" /><label htmlFor="pokemonRed">Red</label>
              <input type="radio" name="pokemon" value="Blue" id="pokemonBlue" /><label htmlFor="pokemonBlue">Blue</label>
            </div>
            <div className="large-6 columns">
              <label>Check these out</label>
              <input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">Checkbox 1</label>
              <input id="checkbox2" type="checkbox" /><label htmlFor="checkbox2">Checkbox 2</label>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <label>Textarea Label
                <textarea placeholder="small-12.columns" />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {};
