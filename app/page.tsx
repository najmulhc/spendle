"use client";
import LandingNavbar from "./components/navbars/landingNavbar";
import { Card } from "./components/styled-components/Card.styled";
import { H1, H3, P } from "./components/styled-components/Typography.styled";

const Home = async () => {
  return (
    <main>
      <LandingNavbar />
      <div className="homeBg">
        <H1 margin="1rem 0" textAlign="center">
          Home Page
        </H1>
        <Card> 
          <H3 textAlign="center">Title of the card</H3>
          <P margin=".5rem 0 0 0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At totam alias quam porro saepe expedita commodi, ab dolore. Consequuntur nobis totam aut ducimus iure deleniti dolorem aliquid ex fuga sapiente.</P>
        </Card>
      </div>
    </main>
  );
};

export default Home;
