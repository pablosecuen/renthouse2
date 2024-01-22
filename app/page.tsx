"use client";
import React from "react";
import FeedBack from "./layout/feedback";
import Landing from "./layout/landing";
import Soon from "./layout/soon";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 ">
      <Landing />
      <Soon />
      <FeedBack />
    </main>
  );
};

export default Home;
