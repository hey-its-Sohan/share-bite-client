import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ShareBite?",
      answer:
        "ShareBite is a community-driven platform that connects people with surplus food to those who need it, helping reduce food waste and fight hunger."
    },
    {
      question: "How can I share food?",
      answer:
        "Simply sign up, list your available food, and our volunteers or requesters can connect with you to arrange pickup or delivery."
    },
    {
      question: "Is there any cost to join?",
      answer:
        "No. ShareBite is completely free for both donors and recipients. Our mission is to make sharing food as easy and accessible as possible."
    },
    {
      question: "How do you ensure food safety?",
      answer:
        "We encourage donors to share only fresh, safe, and hygienic food. Volunteers follow safety guidelines during collection and distribution."
    },
    {
      question: "Can I volunteer?",
      answer:
        "Yes! We welcome volunteers to help with pickups, deliveries, and spreading awareness. Sign up on our Volunteer page."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-14 py-16">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-white border border-base-200 shadow-sm rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
