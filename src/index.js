import React from "react";
import { render } from "react-dom";
import Player from "./Player";

const App = () => {
  // https://github.com/CookPete/react-player#props
  const playerProps = {
    playing: true,
    muted: true,
    controls: false,
    loop: true,
    url: "https://www.youtube.com/watch?v=Dx-XMAJ1mwU"
  };
  return (
    <div>
      <Player {...playerProps} />
    </div>
  );
};
render(<App />, document.getElementById("root"));
