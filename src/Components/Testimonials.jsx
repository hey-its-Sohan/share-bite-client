import React from "react";

const testimonials = [
  {
    name: "Amina Rahman",
    quote: "This platform helped me connect with kind people during a tough time. Sharing truly makes a difference!",
    photo: "https://i.ibb.co/ZpPKzBZm/rodolfo-sanches-carvalho-Cs-Nac-HXW6-RU-unsplash.jpg"
  },
  {
    name: "Kamal Hasan",
    quote: "As a restaurant owner, I now give back daily. It’s easy and so rewarding.",
    photo: "https://i.ibb.co/BJwf8ZP/amir-riazipour-Xc-Z78-Dl-Xtes-unsplash.jpg"
  },
  {
    name: "Sarah Jahan",
    quote: "I love how quick and secure the food sharing process is. Great initiative!",
    photo: "https://i.ibb.co/tGBpFnN/lance-reis-Wqj-S9-TGf0-U-unsplash.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 ">
      <h2 className="text-4xl font-bold  text-dark px-5 lg:px-0 mb-10">What Our Community Says</h2>
      <div className="max-w-screen-xl px-5 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((user, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.photo}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover border border-primary"
              />
              <h4 className="text-lg font-semibold text-dark">{user.name}</h4>
            </div>
            <p className="text-sm text-gray-600 italic">“{user.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;