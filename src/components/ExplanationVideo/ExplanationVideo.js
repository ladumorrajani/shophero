import React, { useState } from "react";
import {
  ExplanationVideoStyle,
  ExplainVideoBlock,
  ExplainVideoContent,
  HeaingSign,
  H3,
  P,
  ExplainVideo,
  VideoBlock,
  Video,
  PlayButton,
} from "./ExplanationVideo.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const ExplanationVideo = (props) => {
  const { t } = useTranslation();
  const { explainVideoProps } = props.ExplainVideoData;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    let myVideo = document.getElementById("videoID");
    if (myVideo.paused) {
      myVideo.play();
      setOpen(true);
    } else {
      myVideo.pause();
      setOpen(false);
    }
    myVideo.onended = function () {
      setOpen(false);
    };
  };

  return (
    <ExplanationVideoStyle>
      <div className="container">
        <ExplainVideoBlock>
          <ExplainVideoContent>
            <HeaingSign />
            <H3>{t("how_it_works.explain_video.title")}</H3>
            <P>{t("how_it_works.explain_video.content")}</P>
          </ExplainVideoContent>
          <ExplainVideo>
            <VideoBlock>
              <Video id="videoID" poster={explainVideoProps.poster}>
                <source src={explainVideoProps.video} type="video/mp4" />
              </Video>
              <PlayButton
                className={`${open ? "pause" : "play"}`}
                onClick={() => handleClick()}
              />
            </VideoBlock>
          </ExplainVideo>
        </ExplainVideoBlock>
      </div>
    </ExplanationVideoStyle>
  );
};

export default ExplanationVideo;
