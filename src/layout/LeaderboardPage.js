import React, {Component} from "react";

export default class LeaderboardPage extends Component {
  render() {
    return (
      <div className="leaderboard-page">
        Leaderboard

        <br/>

        <table>
          <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>1</td>
            <td>None</td>
            <td>Poland</td>
          </tr>
          <tr>
            <td>2</td>
            <td>None</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>3</td>
            <td>None</td>
            <td>Poland</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

LeaderboardPage.propTypes = {};
