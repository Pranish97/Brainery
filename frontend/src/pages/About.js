import React from "react";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About Brainery"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-[#00143a]">About Us</h1>
          <p className="text-lg text-gray-700">
            At <strong>Brainery</strong>, we believe in the transformative power
            of education. Founded with a mission to make high-quality learning
            accessible and engaging for everyone, Brainery is more than just an
            online platform — it’s a digital space where curiosity meets
            opportunity.
            <br />
            <br />
            Our platform combines cutting-edge technology with expert
            instruction to deliver a seamless and personalized learning
            experience. Join us and become part of a global learning community
            dedicated to growth, innovation, and lifelong learning.
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00143a]">
          Who We Are
        </h2>
        <p className="text-gray-700">
          Brainery is a team of educators, developers, designers, and dreamers
          committed to reshaping how people learn. Whether you’re a student,
          professional, or lifelong learner, we provide the tools to guide your
          journey.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00143a]">
          What We Offer
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>Expert-Led Courses</strong>: Developed and delivered by
            industry professionals.
          </li>
          <li>
            <strong>Interactive Learning</strong>: Engage with videos, quizzes,
            and real-world projects.
          </li>
          <li>
            <strong>Career-Focused Tracks</strong>: Learn in-demand skills in
            tech, business, and more.
          </li>
          <li>
            <strong>Flexible Access</strong>: Study anytime, anywhere, at your
            own pace.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00143a]">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To empower individuals worldwide through accessible, practical, and
          high-quality online education that fosters personal and professional
          growth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#00143a]">
          Our Vision
        </h2>
        <p className="text-gray-700">
          To become a global leader in online education by building a vibrant
          learning ecosystem that connects learners with knowledge, skills, and
          opportunities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#00143a]">
          Why Brainery?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Industry-relevant curriculum</li>
          <li>Seamless and intuitive platform</li>
          <li>Hands-on projects and certifications</li>
          <li>Supportive learning community</li>
          <li>Continual updates and innovation</li>
        </ul>
      </section>

      <div className="text-center">
        <p className="text-xl font-semibold text-[#00143a]">
          Learn smarter. Grow faster. Succeed with Brainery.
        </p>
      </div>
    </div>
  );
};

export default About;
