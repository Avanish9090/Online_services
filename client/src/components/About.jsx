import React from "react";

function About() {
  return (
    <>
      <div id="about">
        <h1 className="text-center text-5xl font-headings ">
          <span className="text-red-500">A</span>bout{" "}
          <span className="text-red-500">U</span>s
        </h1>
        <div className="md:bg-blue-200  my-10 md:mx-20 mx-5 md:p-20 md:rounded-2xl md:shadow-lg">
          <h1 className="md:text-4xl text-2xl font-inter text-center">
            Welcome to Prince Online Stetionary & Services, your one-stop
            destination for a wide range of essential services and products!{" "}
          </h1>
          <h1 className="md:text-2xl text-xl text-gray-500">
            We are a multifaceted service provider, committed to serving our
            community with convenience, reliability, and a personal touch
          </h1>
          <p className="md:text-2xl text-xl mt-2">we specialize in:</p>
          <p className="md:text-2xl text-xl mt-1">
            📚Stationery & Office Supplies – From pens and notebooks to school
            and office essentials, we’ve got everything you need.
          </p>
          <p className="md:text-2xl text-xl mt-1">
            {" "}
            🖥️ Online Form Filling Services – Whether it's government forms,
            exam applications, or other official documentation, we ensure
            accurate and timely submissions.
          </p>
          <p className="md:text-2xl text-xl mt-1">
            {" "}
            🎫 Ticket Booking – Book bus, train, or event tickets with ease and
            confidence, without the hassle.
          </p>
          <p className="md:text-2xl text-xl mt-1">
            💍 Wedding Counter Management – Make your big day even smoother with
            our professional counter management services, designed to impress
            your guests and maintain order.
          </p>
          <p className="md:text-2xl text-xl mt-3">
            What sets us apart is our dedication to customer satisfaction and
            our ability to adapt to your diverse needs—all under one roof.
            Whether you're a student, a working professional, or planning a
            grand celebration, we're here to help you every step of the way. We
            look forward to serving you!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
