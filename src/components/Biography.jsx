import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <section className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2 className="text-center font-bold text-4xl p-2">Biography</h2>
          <h3>Who We Are</h3>
          <p>
          Our Hospital is a leading healthcare institution committed to delivering world-class medical services and compassionate care. Established in 1965, the hospital has grown to become a cornerstone of healthcare in the region, offering a wide range of medical specialties and advanced treatment options.
          </p>
          <p>
          The hospital is renowned for its focus on patient-centered care, offering personalized treatment plans and a seamless experience for both inpatients and outpatients. From routine check-ups to complex surgeries,provides medical services that meet international standards.
          </p>
          <p>Equipped with advanced diagnostic labs, a modern intensive care unit ICU, and a fully functional emergency department that operates 24/7, ensuring prompt care for critical cases.</p>
          <p>Committed to healthcare excellence,  also emphasizes preventive care and patient education, organizing regular health camps and wellness programs for the community. Its mission is not only to treat illness but to promote long-term health and well-being.</p>
        </div>
      </section>
    </>
  );
};

export default Biography;