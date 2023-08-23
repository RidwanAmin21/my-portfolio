import React, { useState, useEffect } from "react";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Ridwan\nI build cool things";

  useEffect(() => {
    if (typedText !== fullText) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100); // 100ms delay between characters
    }
  }, [typedText]);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {typedText.split("\n").map((str, idx, array) => (
              <React.Fragment key={idx}>
                {str}
                {idx === array.length - 1 ? null : (
                  <br className="hidden lg:inline-block" />
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi! I'm Ridwan Amin, a second-year computer science student at the
            University of Texas at Dallas. With a strong foundation in object
            oriented programming and software development, I am driven to
            leverage technology to bring my vivid imagination to life. 
            Currently holding a 4.0 GPA, and being a recipient of a full ride scholarship to The University of Texas at Dallas, 
            I've consistently been a top performer in my classes, pushing the boundaries of my understanding with each project and assignment I do.
            I look forward to learn and enhance my skills in any 
            opportunities that come my way.
          </p>
          <p className="mb-8 leading-relaxed">
            Outside of my academic life, I love sports, spending time with my friends and family, trying new foods, and watching movies and shows. I am a huge fan of the Dallas Mavericks, and if I was just a little more athletic I would probably be pursuing my dream of becoming an NBA player instead.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/RidwanAmin21"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./headshot.png"
          />
        </div>
      </div>
    </section>
  );
}
