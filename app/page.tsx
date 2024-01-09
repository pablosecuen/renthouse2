"use client";
import React from "react";
import FeedBack from "./layout/feedback";
import Landing from "./layout/landing";
import Soon from "./layout/soon";
import { withGoogleAnalytics } from "./withGoogleAnalytics";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 ">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNNWD1EF17"></script>
      <Landing />
      <Soon />
      <FeedBack />
    </main>
  );
};

export default withGoogleAnalytics(Home);
