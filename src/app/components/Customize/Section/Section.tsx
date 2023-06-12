import React from "react";

const Section: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="my-6">
      <div className="text-slate-400 mb-2 font-semibold ">{title}</div>
      {children}
    </div>
  );
};

export default Section;
