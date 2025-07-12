import React from "react";

const AdmissionSection = () => {
  return (
    <section className="bg-[#f5f7fa] py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Secure Your Spot for <br className="hidden sm:block" /> the Upcoming
            Intake
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
            Enroll now and start your journey with top-rated courses, expert
            mentors, and hands-on projects. Limited seats available — don’t miss
            your chance to upgrade your skills.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="bg-navigation hover:scale-105 text-white px-6 py-2 rounded font-semibold transition">
              Apply Now
            </button>
            <button className="bg-button hover:scale-105 text-black px-6 py-2 rounded font-medium transition">
              +01 5612812
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="admission"
            className="w-40 sm:w-60 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
