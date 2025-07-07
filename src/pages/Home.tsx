import React from "react";
import Header from "./Header";
import About1 from "./About1";
import Choose from "./card1";
import MarketTicker from "./MarketTicker";
import SocialSidebar from "./socials";

const Home :React.FC = () => {
    return(
        <>
      <MarketTicker />
      <Header />
      <About1 />
      <Choose />
      <SocialSidebar/>
    </>
    );
};

export default Home;