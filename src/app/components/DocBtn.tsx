import React from "react";

const DocBtn = () => {
  return (
    <button
      className="hover:opacity-75 font-semibold text-slate-400 border border-dark-100 bg-transparent flex items-center text-sm rounded-lg px-4 py-2"
      onClick={() => window.open("https://huddle01.com/docs")}
    >
      Documentation
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66683 3.53955C6.29864 3.53955 6.00016 3.83803 6.00016 4.20622C6.00016 4.57441 6.29864 4.87288 6.66683 4.87288H10.3907L3.52876 11.7348C3.26841 11.9952 3.26841 12.4173 3.52876 12.6776C3.78911 12.938 4.21122 12.938 4.47157 12.6776L11.3335 5.81569V9.53955C11.3335 9.90774 11.632 10.2062 12.0002 10.2062C12.3684 10.2062 12.6668 9.90774 12.6668 9.53955V4.20622C12.6668 3.83803 12.3684 3.53955 12.0002 3.53955H6.66683Z"
          fill="#64748B"
        />
      </svg>
    </button>
  );
};

export default DocBtn;
