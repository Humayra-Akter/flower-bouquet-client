import React from "react";
import bouquet from "../../assets/icons/bouquet-of-flowers.png";

const Bouquet = () => {
  return (
    <section className="mt-52 px-28 lg:flex justify-center items-center">
      <div className="w-1/2">
        <img src={bouquet} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-pink-700 uppercase">
          Make your deal with us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nesciunt.
          Laudantium ipsam aperiam eum itaque, perferendis labore voluptatem
          nulla placeat molestiae minima tempore ut iure tempora odio expedita
          corporis, temporibus eveniet natus inventore quae, aliquam fugiat
          magnam voluptate? Magnam, at?
        </p>
      </div>
    </section>
  );
};

export default Bouquet;
