
import React from "react";

const Hero = ({ title,subtitle, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 className="font-bold text-slate-950 text-4xl">{title}</h1>
          <h2 className="font-semibold  text-2xl">{subtitle}</h2>
          <p className="font-montserrat">
            MediManage is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. We prioritize your well-being, ensuring a harmonious journey towards optimal health and wellness.
          </p>
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
