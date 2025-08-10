import React from "react";
import { Utensils, Users, Leaf, Heart } from "lucide-react";

const stats = [
  { icon: <Utensils size={36} />, label: "Meals Shared", value: "2,350+" },
  { icon: <Users size={36} />, label: "Families Helped", value: "1,200+" },
  { icon: <Leaf size={36} />, label: "Food Waste Reduced (kg)", value: "3,450+" },
  { icon: <Heart size={36} />, label: "Active Volunteers", value: "540+" },
];

const Impact = () => {
  return (
    <section id="impact" className="py-12 bg-primary/80 scroll-mt-14">
      <div className="max-w-screen-xl  mx-auto px-5 lg:px-0">
        <h2 className="text-4xl font-bold mb-10">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card bg-white shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-primary mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
