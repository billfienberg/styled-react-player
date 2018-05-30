import React from "react";
import { render } from "react-dom";
import Player from "./Player";

const App = () => {
  const playerProps = { playing: true };
  return (
    <div>
      <Player {...playerProps} />
    </div>
  );
};
render(<App />, document.getElementById("root"));
