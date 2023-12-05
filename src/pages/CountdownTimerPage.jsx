import React from "react";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";

const CountdownTimerPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <CountdownTimer />
      </div>
    </>
  );
};

export default CountdownTimerPage;
