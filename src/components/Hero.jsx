
import React from "react";

const Hero = ({ title,subtitle, imageUrl }) => {
  return (
    <>
      <div className="hero container mx-auto max-w-screen-xl">
        <div className="banner">
          <h1 className="font-bold text-[#4E4F50] text-4xl">{title}</h1>
          <h2 className="font-semibold  text-2xl text-[#746C70]">{subtitle}</h2>
          <p className="font-montserrat text-[#4E4F50]">
            MediManage is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. 
            We prioritize your well-being, ensuring a harmonious journey towards optimal health and wellness.
          </p>
          <button className="bg-white text-gray-600 px-4 py-2 rounded hover:bg-blue-100 w-56" >Book an appointment</button>
        </div>
          <div className="banner">
            <img src={imageUrl} alt="hero" className="rounded-full" />
            <span>
             <img src="/Vector.png" alt="vector" />
            </span>
          </div>
      </div>
    </>
  );
};

export default Hero;
