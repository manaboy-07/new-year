"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import girl from "../assets/momus.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Confetti from "react-confetti";
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
          <h3 className="happy p-2 text-xl flex justify-center items-center text-center">
            <span className="mx-2"> HAPPY BIRTHDAY</span>{" "}
            <AiOutlineArrowRight onClick={toggleCard} />{" "}
          </h3>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>

            <section className="balloon-5">
              <Image src={girl} alt="bithday" className="birthday-girl" />
            </section>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside p-5 flex flex-col text-xl text-black">
          <h3 className="back text-xl flex justify-center items-center text-center">
            <span className="mx-4"> HAPPY BIRTHDAY</span>{" "}
            <AiOutlineArrowLeft onClick={() => setopenCard(false)} />
          </h3>
          <div className="flex p-5">
            <h2>Dear Mummy U.S ,</h2>
          </div>
          <div className="p-5">
            Happy 59th Birthday! On this special day, I want to express my
            deepest gratitude for all the support and love you've given me over
            the years. Your generosity, especially your financial help, has been
            a true blessing, enabling me to pursue my dreams and overcome
            challenges. I am incredibly fortunate to have you in my life, and I
            hope this year brings you as much joy and happiness as you have
            given me. May your birthday be filled with love, laughter, and
            wonderful memories. <br /> <br /> Much love form your nephew OSE
          </div>
        </div>
      </div>
    </>
  );
}
