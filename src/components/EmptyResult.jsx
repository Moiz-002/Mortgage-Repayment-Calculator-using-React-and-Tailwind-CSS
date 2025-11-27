import React from "react";

const EmptyResult = () => {
  return (
    <section
      aria-labelledby="emptyResultHeading"
      className="bg-[hsl(202,55%,16%)] flex items-center justify-center flex-col p-8 gap-4 w-full sm:max-w-[500px] sm:h-[630px] sm:rounded-bl-[64px]"
    >
      {/* Decorative image */}
      <picture aria-hidden="true">
        <img src="/images/illustration-empty.svg" alt="" />
      </picture>

      <h2 id="emptyResultHeading" className="font-bold text-2xl text-white">
        Result shown here
      </h2>

      <p className="text-[hsl(203,41%,72%)] text-center font-medium">
        Complete the form and click ‘calculate repayments’ to see what your
        monthly repayments would be.
      </p>
    </section>
  );
};

export default EmptyResult;
