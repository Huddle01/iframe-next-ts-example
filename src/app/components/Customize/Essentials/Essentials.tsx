import React, { useState } from "react";
import Section from "../Section/Section";
import Toggle from "./Toggle";

import EssentialsIcons, { IEssentialsIcons } from "./EssentialsIcons";

type Props = {};

const Essentials = (props: Props) => {
  const [essentials, setEssentials] = useState<{
    [key in IEssentialsIcons]: boolean;
  }>({
    Microphone: false,
    Camera: false,
    "Screen Share": false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEssentials((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <Section title="Essentials">
      {Object.keys(EssentialsIcons).map((key) => (
        <div key={key} className="flex justify-between odd:my-3 items-center">
          <div className="flex items-center">
            <div className="mr-3 ">
              {EssentialsIcons[key as IEssentialsIcons]}
            </div>

            {key}
          </div>
          <Toggle
            name={key}
            checked={essentials[key as IEssentialsIcons]}
            onChange={onChange}
          />
        </div>
      ))}
    </Section>
  );
};

export default Essentials;
