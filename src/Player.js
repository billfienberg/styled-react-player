import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = ({ className }) => (
  <ReactPlayer
    url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
    className={className}
    playing
    width="100%"
    height="100%"
    controls={false}
    muted
  />
);

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const ResponsiveStyledPlayer = () => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;
