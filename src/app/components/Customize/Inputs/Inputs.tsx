import React, { useState } from "react";
import Section from "../Section/Section";
import TextInputWithBtn from "./TextInputWithBtn/TextInputWithBtn";
import Select from "./TextInputWithBtn/Select";
import { TReaction, reactions } from "@huddle01/iframe/types";
import Button from "./TextInputWithBtn/Button";

type Props = {};

function Inputs({}: Props) {
  const [inputs, setInputs] = useState({
    redirectURLOnLeave: "",
    backgroundURL: "",
    avatarURL: "",
  });

  const [reaction, setReaction] = useState<TReaction>("🎉");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onReactionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setReaction(e.target.value as TReaction);

  return (
    <Section title="Inputs">
      {Object.keys(inputs).map((key) => (
        <TextInputWithBtn
          key={key}
          name={key}
          placeholder={key}
          value={inputs[key as keyof typeof inputs]}
          onChange={onTextChange}
        />
      ))}

      <div className="flex mt-3">
        <Select
          value={reaction}
          options={reactions}
          onChange={onReactionChange}
        />
        <Button>Send Emoji</Button>
      </div>
    </Section>
  );
}

export default Inputs;
