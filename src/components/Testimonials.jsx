import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container px-5 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4 justify-center">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-60 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <div className="flex items-center justify-center mb-8">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center mr-4"
                  />
                  <div className="flex flex-col text-center">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed mb-8 text-gray-300 text-lg">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
