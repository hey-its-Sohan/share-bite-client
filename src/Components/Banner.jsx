import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1920&auto=format&fit=crop"
          alt="Food sharing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 py-20 lg:py-28">



        <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Share Surplus. <br /> Spread Kindness.
        </h1>
        <p className="text-lg text-center sm:text-xl mb-6 text-gray-200">
          Join thousands of people fighting food waste in Dhaka.
        </p>

        {/* Stats */}

        <div className="flex flex-wrap mx-auto justify-center  gap-6 mb-8">
          <div>
            <p className="text-2xl text-center font-bold">2,350+</p>
            <p className="text-sm text-center text-gray-300">Meals Shared</p>
          </div>
          <div>
            <p className="text-2xl text-center font-bold">1,200+</p>
            <p className="text-sm text-center text-gray-300">Families Helped</p>
          </div>
        </div>


        {/* Buttons */}
        <div className="flex flex-wrap text-center mx-auto items-center justify-center gap-4">
          <a
            href="/add-food"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Share Food
          </a>
          <a
            href="/available-foods"
            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition"
          >
            Request Food
          </a>
        </div>
      </div>


    </section>
  );
};

export default Banner;
