import React from "react";
import {Route} from "react-router";
import QuizPage from "./layout/QuizPage";
import AboutPage from "./layout/AboutPage";
import MainLayout from "./layout/MainLayout";
import LeaderboardPage from "./layout/LeaderboardPage";
import RegisterPage from "./layout/RegisterPage";
import LoginPage from "./layout/LoginPage";
import NotFoundPage from "./layout/NotFoundPage";

const routes = (
  <div>
    <Route component={MainLayout}>
      <Route path="/" component={QuizPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/leaderboard" component={LeaderboardPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path='*' component={NotFoundPage} />
    </Route>
  </div>
);

export default routes
