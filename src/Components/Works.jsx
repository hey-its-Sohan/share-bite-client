import { div } from "framer-motion/client";
import { MapPin, Recycle, UserPlus, Utensils } from "lucide-react";
import React from "react";


const steps = [
  { icon: <UserPlus className="mx-auto" size={40} />, title: "Sign Up", desc: "Create your account in seconds." },
  { icon: <Utensils className="mx-auto" size={40} />, title: "Share or Request", desc: "Post available food or request nearby food." },
  { icon: <MapPin className="mx-auto" size={40} />, title: "Arrange Pickup", desc: "Coordinate pickup with the donor or recipient." },
  { icon: <Recycle className="mx-auto" size={40} />, title: "Reduce Waste", desc: "Help feed others and protect the planet." },
];

const Works = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl mx-auto py-16 px-5 lg:px-0">
        <h2 className="text-4xl font-bold  text-white mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;