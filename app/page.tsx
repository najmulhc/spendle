"use client";
import LandingNavbar from "./components/navbars/landingNavbar";

const Home = async () => {
  return (
    <main>
      <LandingNavbar />
      <h1>This is a truly server rendered Homepage for show only</h1>
    </main>
  );
};

export default Home;
