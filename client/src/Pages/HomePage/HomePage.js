import React from "react";
import '../../App.css'
import HomepageBanner from "./HomepageBanner";
import Services from "./Services";
import TeamMembers from "./TeamMembers";
const HomePage = () => {
  return (
    <>
      <div className="xl:px-52 lg:px-20 md:px-24 px-2">
        <HomepageBanner />
      </div>
      <div className="xl:px-52 lg:px-20 md:px-24 px-2 bg-slate-400 bg-opacity-10 banner">
        <Services />
      </div>
      <div className="xl:px-52 lg:px-20 md:px-24 px-2">
        <TeamMembers></TeamMembers>
      </div>
    </>
  );
};

export default HomePage;
