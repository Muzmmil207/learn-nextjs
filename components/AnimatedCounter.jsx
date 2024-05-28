"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp duration={4} end={amount} />
    </div>
  );
};

export default AnimatedCounter;
