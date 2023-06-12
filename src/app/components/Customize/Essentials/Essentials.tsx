import React, { useState } from "react";
import Section from "../Section/Section";
import Toggle from "./Toggle";

import EssentialsIcons, { IEssentialsIcons } from "./EssentialsIcons";

import { iframeApi } from "@huddle01/iframe";

const Essentials = () => {
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
      <div className="flex justify-between odd:my-3 items-center text-sm font-medium">
        <div className="flex items-center">
          <div className="mr-3 ">{EssentialsIcons.Camera}</div>
          <div>Camera</div>
        </div>
        <Toggle
          name={"Camera"}
          checked={essentials.Camera}
          onChange={(e) => {
            if (essentials.Camera) iframeApi.disableWebcam();
            else iframeApi.enableWebcam();

            onChange(e);
          }}
        />
      </div>
      <div className="flex justify-between odd:my-3 items-center">
        <div className="flex items-center">
          <div className="mr-3 ">{EssentialsIcons.Microphone}</div>
          <div>Microphone</div>
        </div>
        <Toggle
          name={"Microphone"}
          checked={essentials.Microphone}
          onChange={(e) => {
            if (essentials.Microphone) iframeApi.muteMic();
            else iframeApi.unmuteMic();

            onChange(e);
          }}
        />
      </div>
      <div className="flex justify-between odd:my-3 items-center">
        <div className="flex items-center">
          <div className="mr-3 ">{EssentialsIcons["Screen Share"]}</div>
          <div>Screen Share</div>
        </div>
        <Toggle
          name={"Screen Share"}
          checked={essentials["Screen Share"]}
          onChange={(e) => {
            if (essentials["Screen Share"]) iframeApi.disableShare();
            else iframeApi.enableShare();

            onChange(e);
          }}
        />
      </div>
    </Section>
  );
};

export default Essentials;
