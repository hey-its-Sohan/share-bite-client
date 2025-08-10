import React from "react";


const CTA = () => {
  return (
    <section
      className="relative w-full bg-cover my-10 bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dpwjurgeu/image/upload/v1754817073/spencer-davis-vJsj-hgOEG0-unsplash_ohgjx5.jpg')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to make a difference?
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Join <span className="text-primary font-semibold">ShareBite</span> and help your
          community today by sharing surplus food and reducing waste.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="btn btn-primary text-white text-lg px-8 shadow-lg hover:scale-105 transition-transform duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
