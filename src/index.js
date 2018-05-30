import React from "react";
import { render } from "react-dom";
import Player from "./Player";

const App = () => {
  return (
    <div>
      <Player />
    </div>
  );
};
render(<App />, document.getElementById("root"));
