import React, { useRef, useState } from "react";
import Result from "./Result";
import EmptyResult from "./EmptyResult";

const CalculatorForm = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [monthlyInterest, setMonthlyInterest] = useState(null);
  const [error, setError] = useState("");
  const amountRef = useRef();
  const yearRef = useRef();
  const interestRef = useRef();

  function calculateRepayments(e) {
    e.preventDefault();

    if (
      !mortgageAmount ||
      !interestRate ||
      !mortgageType ||
      (mortgageType === "repayment" && !mortgageTerm)
    ) {
      setError("This field is required");
      return;
    }

    setError("");
    if (mortgageType === "interestOnly") {
      const P = Number(mortgageAmount);
      const r = Number(interestRate) / 100;
      const interestOnly = P * (r / 12);

      setMonthlyInterest(interestOnly.toFixed(2));
      setMonthlyPayment(null);
      setTotalPayment(null);
    } else {
      const P = Number(mortgageAmount);
      const years = Number(mortgageTerm);
      const annualRate = Number(interestRate);

      const i = annualRate / 100 / 12;
      const n = years * 12;

      const monthly = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
      const total = monthly * n;

      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment(total.toFixed(2));
      setMonthlyInterest(null);
    }
  }

  function clearForm() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setMonthlyPayment(null);
    setTotalPayment(null);
    setMonthlyInterest(null);
    setError("");
  }

  return (
    <>
      <form
        className="flex flex-col gap-4 sm:p-10 p-8 w-full sm:max-w-[500px] sm:h-[630px]"
        aria-labelledby="mortgageCalcHeading"
      >
        <div className="order-0 flex flex-col sm:flex-row gap-2 justify-start sm:justify-between sm:items-center items-start">
          <h1
            id="mortgageCalcHeading"
            className="font-semibold text-2xl text-slate-900"
          >
            Mortgage Calculator
          </h1>

          <button
            type="button"
            className="font-medium underline text-slate-500 hover:text-slate-700 cursor-pointer"
            onClick={clearForm}
            aria-label="Clear all fields"
          >
            Clear All
          </button>
        </div>

        {/* MORTGAGE AMOUNT */}
        <div className="order-1">
          <label htmlFor="mortgageAmount" className="flex flex-col gap-2">
            <p className="text-slate-500 text-base font-medium">
              Mortgage Amount
            </p>

            <span
              onClick={() => amountRef.current.focus()}
              className={`group flex border-2 ${
                !mortgageAmount && error ? "border-red-500" : "border-slate-500"
              } rounded-lg hover:border-slate-700 active:border-[hsl(61,74%,74%)] cursor-pointer`}
            >
              <p
                className={`text-lg ${
                  !mortgageAmount && error ? "bg-red-500" : "bg-blue-50"
                } group-active:bg-[hsl(61,74%,74%)] px-3 py-2.5 font-bold ${
                  !mortgageAmount && error ? "text-white" : "text-slate-500"
                } rounded-l-md`}
              >
                £
              </p>

              <input
                ref={amountRef}
                id="mortgageAmount"
                type="text"
                value={mortgageAmount}
                aria-invalid={!mortgageAmount && error ? "true" : "false"}
                aria-describedby={
                  !mortgageAmount && error ? "amountError" : undefined
                }
                className="w-full border-none focus:outline-none p-2 font-bold text-slate-900"
                onChange={(e) => setMortgageAmount(e.target.value)}
              />
            </span>

            {!mortgageAmount && error && (
              <p
                id="amountError"
                className="text-base text-red-500 font-medium"
                aria-live="polite"
              >
                {error}
              </p>
            )}
          </label>
        </div>

        {/* MORTGAGE TERM + INTEREST RATE */}
        <div className="order-2 flex flex-col sm:flex-row justify-between gap-5">
          {/* TERM */}
          <div>
            <label htmlFor="mortgageTerm" className="flex flex-col gap-2">
              <p className="text-slate-500 text-base font-medium">
                Mortgage Term
              </p>

              <span
                onClick={() => yearRef.current.focus()}
                className={`group flex border-2 ${
                  !(mortgageTerm || mortgageType === "interestOnly") && error
                    ? "border-red-500"
                    : "border-slate-500"
                } rounded-lg hover:border-slate-700 cursor-pointer active:border-[hsl(61,74%,74%)]`}
              >
                <input
                  ref={yearRef}
                  id="mortgageTerm"
                  type="text"
                  value={mortgageTerm}
                  aria-invalid={
                    mortgageType === "repayment" && !mortgageTerm && error
                      ? "true"
                      : "false"
                  }
                  aria-describedby={
                    mortgageType === "repayment" && !mortgageTerm && error
                      ? "termError"
                      : undefined
                  }
                  className="w-full border-none focus:outline-none p-2 font-bold text-slate-900"
                  onChange={(e) => setMortgageTerm(e.target.value)}
                />

                <p
                  className={`text-lg ${
                    !(mortgageTerm || mortgageType === "interestOnly") && error
                      ? "bg-red-500"
                      : "bg-blue-50"
                  } group-active:bg-[hsl(61,74%,74%)] px-3 py-2.5 font-bold ${
                    !(mortgageTerm || mortgageType === "interestOnly") && error
                      ? "text-white"
                      : "text-slate-500"
                  } rounded-r-md`}
                >
                  years
                </p>
              </span>

              {mortgageType === "repayment" && !mortgageTerm && error && (
                <p
                  id="termError"
                  className="text-base text-red-500 font-medium"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}
            </label>
          </div>

          {/* INTEREST RATE */}
          <div>
            <label htmlFor="interestRate" className="flex flex-col gap-2">
              <p className="text-slate-500 text-base font-medium">
                Interest Rate
              </p>

              <span
                onClick={() => interestRef.current.focus()}
                className={`group flex border-2 ${
                  !interestRate && error ? "border-red-500" : "border-slate-500"
                } rounded-lg hover:border-slate-700 active:border-[hsl(61,74%,74%)] cursor-pointer`}
              >
                <input
                  ref={interestRef}
                  id="interestRate"
                  type="text"
                  value={interestRate}
                  aria-invalid={!interestRate && error ? "true" : "false"}
                  aria-describedby={
                    !interestRate && error ? "rateError" : undefined
                  }
                  className="w-full border-none focus:outline-none p-2 font-bold text-slate-900"
                  onChange={(e) => setInterestRate(e.target.value)}
                />

                <p
                  className={`text-lg ${
                    !interestRate && error ? "bg-red-500" : "bg-blue-50"
                  } group-active:bg-[hsl(61,74%,74%)] px-3 py-2.5 font-bold ${
                    !interestRate && error ? "text-white" : "text-slate-500"
                  } rounded-r-md`}
                >
                  %
                </p>
              </span>

              {!interestRate && error && (
                <p
                  id="rateError"
                  className="text-base text-red-500 font-medium"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}
            </label>
          </div>
        </div>

        {/* MORTGAGE TYPE */}
        <div className="order-3 flex flex-col gap-3">
          <p className="text-slate-500 text-base font-medium">Mortgage Type</p>

          <label
            htmlFor="repaymentType"
            className={`border-2 rounded-lg p-3 flex gap-3 font-bold text-slate-900 active:bg-[hsl(61,87%,91%)] hover:border-[hsl(61,74%,74%)] cursor-pointer
  ${
    mortgageType === "repayment"
      ? "bg-[hsl(61,87%,91%)] border-[hsl(61,74%,74%)]"
      : "border-slate-500"
  }`}
          >
            <input
              id="repaymentType"
              type="radio"
              name="mortgageType"
              value="repayment"
              className="accent-lime-900"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Repayment
          </label>

          <label
            htmlFor="interestOnlyType"
            className={`border-2 rounded-lg p-3 flex gap-3 font-bold text-slate-900 
    active:bg-[hsl(61,87%,91%)] hover:border-[hsl(61,74%,74%)] cursor-pointer
    ${
      mortgageType === "interestOnly"
        ? "bg-[hsl(61,87%,91%)] border-[hsl(61,74%,74%)]"
        : "border-slate-500"
    }
  `}
          >
            <input
              id="interestOnlyType"
              type="radio"
              name="mortgageType"
              value="interestOnly"
              className="accent-lime-900"
              checked={mortgageType === "interestOnly"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Interest Only
          </label>

          {!mortgageType && error && (
            <p
              id="typeError"
              className="text-base text-red-500 font-medium"
              aria-live="polite"
            >
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={calculateRepayments}
          className="order-4 flex items-center justify-center flex-wrap w-full sm:max-w-72 p-4 font-bold gap-3 rounded-full bg-[hsl(61,70%,52%)] hover:bg-[hsl(61,74%,74%)] cursor-pointer"
          aria-label="Calculate mortgage repayments"
        >
          <img src="/images/icon-calculator.svg" alt="" aria-hidden="true" />
          <span>Calculate Repayments</span>
        </button>
      </form>

      {/* RESULTS */}
      {mortgageType === "repayment" &&
      monthlyPayment !== null &&
      totalPayment !== null &&
      !Number.isNaN(Number(monthlyPayment)) &&
      !Number.isNaN(Number(totalPayment)) ? (
        <Result monthlyPayment={monthlyPayment} totalPayment={totalPayment} />
      ) : mortgageType === "interestOnly" &&
        monthlyInterest !== null &&
        !Number.isNaN(Number(monthlyInterest)) ? (
        <Result monthlyInterest={monthlyInterest} />
      ) : (
        <EmptyResult />
      )}
    </>
  );
};

export default CalculatorForm;
