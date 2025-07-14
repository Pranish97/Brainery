import { FaGoogle, FaSlack, FaTrello } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import description from "../helpers/descriptions";

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="bg-[#f8f9fa] py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Learn Faster, Smarter, and Anytime
          </h1>
          <p className="text-gray-600 mb-6">
            Start your journey today with high-quality courses crafted by
            industry professionals.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <FaGoogle size={28} />
          <FaTrello size={28} />
          <SiNotion size={28} />
          <FaSlack size={28} />
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {description.map((item, idx) => (
            <div key={idx} className="p-4 shadow rounded bg-[#f9fafb] ">
              <div className="flex justify-center items-center mb-3">
                <div className="text-white font-bold text-xl bg-navigation rounded-full px-2 py-1 h-10 w-10 flex items-center justify-center">
                  {item.step}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
