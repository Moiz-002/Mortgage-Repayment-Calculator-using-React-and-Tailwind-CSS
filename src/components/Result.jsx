import React from "react";

const Result = ({ monthlyPayment, totalPayment, monthlyInterest }) => {
  return (
    <section
      aria-labelledby="resultHeading"
      className="bg-[hsl(202,55%,16%)] flex items-start justify-start flex-col p-10 gap-4 w-full sm:max-w-[500px] sm:h-[630px] sm:rounded-bl-[64px]"
    >
      <h2 id="resultHeading" className="font-bold text-2xl text-white">
        Your results
      </h2>

      <p className="text-[hsl(203,41%,72%)] font-medium">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click ‘calculate repayments’
        again.
      </p>

      <div className="flex flex-col gap-10 border-t-4 border-[hsl(61,70%,52%)] w-full rounded-lg bg-slate-900 p-10">
        {/* Monthly Repayments */}
        <div className="flex flex-col gap-6">
          <p className="text-[hsl(203,41%,72%)] font-medium">
            Your monthly repayments
          </p>

          <h3
            className="font-bold text-6xl text-[hsl(61,70%,52%)] overflow-auto"
            aria-live="polite"
            aria-label={`Monthly repayment is £${monthlyPayment}`}
          >
            £{monthlyPayment}
          </h3>
        </div>

        <div className="border-b border-b-slate-500" />

        {/* Total Payment */}
        <div className="flex flex-col gap-3">
          <p className="text-[hsl(203,41%,72%)] font-medium">
            Total you'll pay over the term
          </p>

          <h3
            className="font-bold text-2xl text-white overflow-auto"
            aria-live="polite"
            aria-label={`Total repayment over the term is £${totalPayment}`}
          >
            £{totalPayment}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Result;
