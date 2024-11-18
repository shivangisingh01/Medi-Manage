import React from "react";
import doc1 from "../assets/icons/c.jpg";
import doc2 from "../assets/icons/a.jpg";
import doc3 from "../assets/icons/ent.jpg";

function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="relative w-full h-[350px] bg-gradient-to-r from-purple-600 to-red-400 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-16 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center text-purple-700">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          At MediManage, we are dedicated to providing the highest quality healthcare with compassion, empathy, and respect.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To deliver exceptional healthcare services with a patient-centric approach, focusing on personalized care and cutting-edge technology.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To become a trusted leader in healthcare, known for integrity, commitment to patient well-being, and fostering a healthier society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-purple-50 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center text-purple-700">Our Core Values</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-purple-700 text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold">Compassion</h3>
            <p className="mt-2 text-gray-600">
              We treat every patient with empathy and respect, understanding their unique journey and needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-purple-700 text-4xl mb-4">🧑‍⚕️</div>
            <h3 className="text-xl font-semibold">Expertise</h3>
            <p className="mt-2 text-gray-600">
              Our team of skilled professionals is committed to staying at the forefront of medical innovation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-purple-700 text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold">Integrity</h3>
            <p className="mt-2 text-gray-600">
              We uphold the highest ethical standards in everything we do, building trust with every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center text-purple-700">Meet Our Team</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Our dedicated team of doctors and medical staff is here to provide the best care for you and your loved ones.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={doc2}
              alt="Dr. Shivangi Singh"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700">Dr. Shivangi Singh</h3>
            <p className="text-gray-500">Cardiologist</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={doc3}
              alt="Dr. Sumit Kumar"
              className="rounded-full mx-auto mb-4 "
            />
            <h3 className="text-xl font-semibold text-purple-700">Dr. Sumit Kumar</h3>
            <p className="text-gray-500">Neurologist</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src= {doc1}
              alt="Dr. Anjali Sharma"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700">Dr. Anjali Sharma</h3>
            <p className="text-gray-500">Neurologist</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-purple-600 text-white px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <p className="mt-4 text-center">
          Have questions? Reach out to us!
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center">
            <p className="font-semibold">📍 Address:</p>
            <p>1234 Medical St, Healthcare City, State</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">📞 Phone:</p>
            <p>+1 (234) 567-890</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">✉️ Email:</p>
            <p>info@medimanage.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;


