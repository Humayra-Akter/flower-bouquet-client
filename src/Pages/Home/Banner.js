import React from "react";
import img1 from "../../assets/icons/img1.png";
import img2 from "../../assets/icons/img2.png";
import img3 from "../../assets/icons/img3.png";
import img4 from "../../assets/icons/img4.png";
import img5 from "../../assets/icons/img5 .png";
import img6 from "../../assets/icons/img6.png";
import img7 from "../../assets/icons/img7.png";

const Banner = () => {
  return (
    <div className="hero bg-pink-100 min-h-screen">
      <div className="card flex-col gap-16 px-10 lg:card-side">
        <div>
          <div class="h-96 carousel carousel-vertical rounded-box">
            <div class="carousel-item h-full">
              <img src={img1} />
            </div>
            <div class="carousel-item h-full">
              <img src={img2} />
            </div>
            <div class="carousel-item h-full">
              <img src={img3} />
            </div>
            <div class="carousel-item h-full">
              <img src={img4} />
            </div>
            <div class="carousel-item h-full">
              <img src={img5} />
            </div>
            <div class="carousel-item h-full">
              <img src={img6} />
            </div>
            <div class="carousel-item h-full">
              <img src={img7} />
            </div>
          </div>
          <p className="text-pink-700 font-semibold text-center text-xs mt-7">
            <small>scroll down or scroll up</small>
          </p>
        </div>
        <div className="card-body">
          <h2 className="text-5xl font-bold text-pink-700">
            When You Think Of Flowers
          </h2>
          <h2 className="text-5xl font-bold text-pink-700">Think Of Ours</h2>
          <p className="text-xs pt-6 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos
            illum molestiae recusandae quia, sequi odio qui vel maxime officiis.
          </p>
          <button className="btn w-1/2 font-bold text-lg border-accent border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
