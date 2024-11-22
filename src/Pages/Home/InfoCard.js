import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div
      className={`card lg:card-side bg-pink-100 hover:-translate-y-5 shadow-xl ${bgClass}`}
    >
      <figure>
        <img className="px-6 py-px" src={img} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl pt-4 font-bold text-pink-700">
          {cardTitle}
        </h2>
        <p className="text-xs font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quia,
          nostrum obcaecati vero fuga quas!
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
