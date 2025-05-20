import React, { useEffect, useState } from "react";
import "./App.css";
import { Fade } from "react-awesome-reveal";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Logo from "./JA_Logo.svg";
import styles from "./ParallaxBanner.scss";
import Plx from "react-plx";
import Resume from "./components/resume.js";
import Separator from "./components/separator.js";
import AboutMe from "./components/aboutMe.js";
import Layer1 from "./images/1-min.png";
import Layer2 from "./images/2-min.webp";
import Layer3 from "./images/3-min.png";
import Layer4 from "./images/4-min.webp";
import Layer5 from "./images/5-min.png";
import Layer6 from "./images/6.png";

const layers = [
    { image: Layer6, speed: -20 },
    { image: Layer5, speed: -15 },
    { image: Layer4, speed: -10 },
    { image: Layer3, speed: -5 },
    { image: Layer2, speed: 0 },
    { image: Layer1, speed: 5 },
];

function App() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const updateDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const direction = dimensions.width > dimensions.height ? "w" : "h";
  const isMobile = dimensions.width <= 768;

  const renderSlideyTitle = () => {
    const sharedStyles = {
      width: "fit-content",
      display: "inline-block",
      verticalAlign: "middle",
    };

    const parallaxTranslateX = {
      start: "self",
      duration: "40%",
      easing: "ease",
      startOffset: "10%",
      properties: [
        {
          startValue: 0,
          endValue: dimensions.width - dimensions.width * 0.95,
          property: "translateX",
        },
      ],
    };

    const mobileParallax = {
      start: "self",
      duration: "40%",
      easing: "ease",
      startOffset: "10%",
      properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
    };

    return (
      <div>
        <Plx
          style={sharedStyles}
          parallaxData={[isMobile ? mobileParallax : { ...parallaxTranslateX, properties: [{ ...parallaxTranslateX.properties[0], endValue: -dimensions.width + dimensions.width * 0.95 }] }]}
        >
          <img src={Logo} alt="logo" style={{ height: `20v${direction}` }} />
        </Plx>
        <Plx
          className="main-color"
          style={sharedStyles}
          parallaxData={[isMobile ? mobileParallax : parallaxTranslateX]}
        >
          <h1 style={{ fontSize: `9v${direction}`, fontWeight: "lighter" }}>
            Experience
          </h1>
        </Plx>
      </div>
    );
  };

  return (
    <ParallaxProvider>
      <div className="App ms-Fabric">
        <Fade>
          <div className={styles.bannerContainer}>
            <ParallaxBanner
              className={styles.bannerBg}
              layers={layers}
              style={{ height: "100vh" }}
            >
              <div className="parallaxChildren ms-font-su">
                <img src={Logo} alt="logo" style={{ height: `25v${direction}` }} />
                <h1 style={{ fontSize: `7v${direction}`, color: "white", margin: 0 }}>
                  Joseph Antony
                </h1>
              </div>
            </ParallaxBanner>
          </div>
        </Fade>

        <AboutMe />
        <Separator />

        <div className="resume">
          <div style={{ verticalAlign: "middle" }}>{renderSlideyTitle()}</div>
          <Fade>
            <Resume />
          </Fade>
          <Separator />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
