import React, { useState } from "react";
import Section from "../Section/Section";
import CheckboxWithName from "../Wallets/CheckboxWithName";
import { iframeApi } from "@huddle01/iframe";

const Additional = () => {
  const [checkBoxes, setCheckBoxes] = useState({
    gradientAndMesh: true,
    isCopyMeetingVisible: true,
  });

  const Names = {
    gradientAndMesh: "Gradient and mesh",
    isCopyMeetingVisible: "Copy meeting link button",
  };

  return (
    <Section title="Additional">
      <div className="grid gap-3 border border-slate-700 p-4 rounded-lg">
        {Object.entries(checkBoxes).map(([key, value]) => (
          <CheckboxWithName
            name={key}
            key={key}
            title={Names[key as keyof typeof Names]}
            checked={value}
            onChange={(e) => {
              setCheckBoxes((prev) => ({
                ...prev,
                [e.target.name]: e.target.checked,
              }));
              iframeApi.initialize({
                [key]: e.target.checked,
              });
            }}
          />
        ))}
      </div>
    </Section>
  );
};

export default Additional;
