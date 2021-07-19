import React from "react";
import phoneImg from "./images/phone.svg";

import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeModal } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Get Paid like a heavyweight!</h1>
          <p>
            I make chedder cheese money for cheeder cheese fools my friend
            because everyone knows that chedder does indeed make it better and
            so therefore and whence it came to be that it was chedder which
            ruled the day with much cheese and rejoicing with chedder.
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
