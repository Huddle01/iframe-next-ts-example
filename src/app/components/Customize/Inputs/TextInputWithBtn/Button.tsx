import React from "react";

type Props = {};

const Button = (
  props: Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
) => {
  return <button className="py-2 px-3 rounded-lg">{props.children}</button>;
};

export default Button;
