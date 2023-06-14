import React, { useState } from "react";
import Section from "../Section/Section";
import TextInputWithBtn from "./TextInputWithBtn/TextInputWithBtn";
import Select from "./TextInputWithBtn/Select";
import { TReaction, reactions } from "@huddle01/iframe/types";
import Button from "./TextInputWithBtn/Button";
import { iframeApi, useEventListner } from "@huddle01/iframe";

type Props = {};

function Inputs({}: Props) {
  const [isRoomJoined, setIsRoomJoined] = useState(false);

  const [inputs, setInputs] = useState({
    redirectURLOnLeave: "",
    backgroundURL: "",
    avatarURL: "",
  });

  const keys = {
    redirectURLOnLeave: "redirectUrlOnLeave",
    backgroundURL: "background",
  };

  const [reaction, setReaction] = useState<TReaction>("🎉");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onReactionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setReaction(e.target.value as TReaction);

  useEventListner("room:joined", () => {
    setIsRoomJoined(true);
  });

  return (
    <Section title="Inputs">
      {Object.keys(inputs).map((key) => (
        <TextInputWithBtn
          key={key}
          name={key}
          placeholder={`Paste ${key}`}
          value={inputs[key as keyof typeof inputs]}
          onChange={onTextChange}
          onClick={() => {
            if (key === "avatarURL") {
              return iframeApi.changeAvatarUrl(inputs.avatarURL);
            }
            console.log("Inputs", {
              [keys[key as keyof typeof keys]]:
                inputs[key as keyof typeof inputs],
            });

            iframeApi.initialize({
              [keys[key as keyof typeof keys]]:
                inputs[key as keyof typeof inputs],
            });
          }}
        />
      ))}

      <div className="flex mt-3">
        <Select
          disabled={!isRoomJoined}
          value={reaction}
          options={reactions}
          onChange={onReactionChange}
        />
        <Button
          disabled={!isRoomJoined}
          onClick={() => iframeApi.sendReaction(reaction)}
        >
          Send Emoji
        </Button>
      </div>
    </Section>
  );
}

export default Inputs;
