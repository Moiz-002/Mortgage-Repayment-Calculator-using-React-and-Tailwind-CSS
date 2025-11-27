import React from "react";
import CalculatorForm from "./components/CalculatorForm";
import Result from "./components/Result";
import EmptyResult from "./components/EmptyResult";

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#E3F4FC]">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center sm:gap-6 bg-white sm:rounded-2xl overflow-hidden">
        <CalculatorForm />
      </div>
    </main>
  );
};

export default App;
