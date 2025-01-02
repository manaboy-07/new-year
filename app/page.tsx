"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Confetti from "react-confetti";

import imgGif from "../assets/rcg-3.gif";
export default function Home() {
  const [openCard, setopenCard] = useState<boolean>(false);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  function doSomething() {
    setShowConfetti((prevState) => true);
  }

  // Set the interval to 120000 milliseconds (2 minutes)
  const intervalId = setInterval(doSomething, 2000);

  // To stop the interval after a certain amount of time (e.g., 10 minutes)
  // Uncomment the following lines:

  setTimeout(() => {
    clearInterval(intervalId);
  }, 20000);
  const toggleCard = () => {
    setopenCard((prevState) => !prevState);
  };
  return (
    <>
      {showConfetti && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <div className={`${openCard ? "hoverCard" : null} birthdayCard`}>
        <div className="cardFront">
          <h3 className="happy  text-xl flex flex-col justify-center items-center text-center">
            <span className="mx-2 block"> HAPPY NEW YEAR !!!</span> <br />
            <small className="block text-center text-sm ">
              <span className="flex gap-1">
                we got a message for you
                <AiOutlineArrowRight onClick={toggleCard} />{" "}
              </span>
            </small>
          </h3>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>

            <section className="balloon-5">
              <Image src={imgGif} alt="bithday" className="birthday-girl" />
            </section>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside p-5 flex flex-col text-xl text-black">
          <div className="container">
            <div className={"overlay"}>
              <h3 className="back text text-xl flex justify-center items-center text-center">
                <span className="mx-4 font-bold text-2xl text-white">
                  {" "}
                  Welcome to 2025
                </span>{" "}
                <AiOutlineArrowLeft onClick={() => setopenCard(false)} />
              </h3>
              <h1 className={"text"}>
                Happy New Year from Glorious Lane LLC! 🎉** As we welcome 2025,
                we want to express our heartfelt gratitude for your trust and
                support over the past year. At **Glorious Lane LLC**, our
                commitment to delivering excellence and ensuring timely,
                reliable shipping services remains as strong as ever. We are
                excited to continue providing you with seamless, efficient
                solutions in the year ahead. Whether it's local or international
                shipping, rest assured that we will continue to go above and
                beyond to make your logistics experience smooth and successful.
                May this year bring you new opportunities, growth, and
                prosperity. We look forward to being part of your journey in
                2025! Thank you for choosing Glorious Lane LLC. Wishing you a
                year full of success and joy! **Happy New Year!** 🎊
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
