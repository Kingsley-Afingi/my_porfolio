import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at NovaTech",
    feedback:
      "Working with Kingsley was a fantastic experience. His technical skills in React, Next.js, and backend integration are impressive, and his attention to detail helped us deliver our project ahead of schedule.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Carter",
    role: "Founder of DevHire",
    feedback:
      "Kingsley is an exceptional full-stack developer. He built a scalable web app using TypeScript and Supabase that exceeded our expectations. Highly professional and always proactive!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer at PixelCraft",
    feedback:
      "Collaborating with Kingsley was smooth and inspiring. He transforms complex designs into fully responsive and interactive user experiences. Truly a developer with a designer’s mindset.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300"
            >
              <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
