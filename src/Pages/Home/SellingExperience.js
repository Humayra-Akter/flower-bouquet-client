import React from "react";
import seller from "../../assets/icons/sell-removebg-preview.png";
import bg from "../../assets/images/bg.png";

const SellingExperience = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="flex mt-56 justify-center items-center mx-6 px-10"
    >
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-pink-700 py-4">
          experienced for years
        </h1>
        <p className="text-sm text-neutral font-semibold justify-around">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quia
          nulla vitae perspiciatis assumenda molestiae ex fugiat deleniti.
          Voluptatem, molestias! Cupiditate quae debitis, quia veniam voluptas
          ipsam deleniti rem itaque doloremque dolore dicta laudantium cumque
          laborum sint atque repellendus hic.
        </p>
      </div>
      <div className="flex-1 mt-[-100px]">
        <img src={seller} alt="" />
      </div>
    </section>
  );
};

export default SellingExperience;
