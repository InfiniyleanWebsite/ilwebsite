import React from "react";
import Header from "./components/header";

import Footer from "./components/footer";

import HomePage from "./homePage";
import LoginPage from "./loginPage";
import LiveCourse from "./livecourses";

function index() {
  return (
    <div className="">
      {/* <H  eader /> */}
      <HomePage />
      {/* <LoginPage /> */}
      {/* <LiveCourse /> */}
      <Footer />
    </div>
  );
}
export default index;
