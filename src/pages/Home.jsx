import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/Feedback";
import Departments from "../components/Departments";


const Home = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-cyan-500">
      Hello world!
    </h1> */}
       <Hero
          title={"Welcome to MediManage || "}
          subtitle={"Your Trusted Healthcare Provider"}
          imageUrl={"/hero.jpg"}
        />
      <Biography imageUrl={"/hospi staff.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;