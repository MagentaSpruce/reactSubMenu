import React from "react";
import phoneImg from "./images/phone.svg";
import { AppProvider } from "./context";

import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeModal } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
            quisquam.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            repudiandae delectus, debitis reiciendis id quae consequuntur facere
            at neque veniam error in? Atque sed, voluptatibus nobis vero illo
            ipsam voluptates!
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
