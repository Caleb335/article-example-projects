import React from "react";
import { Player } from "@remotion/player";
const video = require("../../../public/step.mp4");

const Video = () => {
  return (
    <div>
      <h3>Video component will be rendered here</h3>
      <Player
        component={video}
        durationInFrames={120}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
      />
    </div>
  );
};

export default Video;
