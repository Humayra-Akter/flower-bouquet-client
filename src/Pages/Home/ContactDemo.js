import React from "react";
import bg from "../../assets/images/purple-bg.png";

const ContactDemo = () => {
  return (
    <section className="mt-14">
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="flex m-2"
      >
        <div className="hero flex-1 pl-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XCA3igbFg3I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="hero min-h-screen">
          <div className="card w-full max-w-lg">
            <h1 className="text-center text-2xl font-bold text-pink-700">
              Contact Us
            </h1>
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="your message"
                  className="input-lg input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDemo;
