import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import BG from "./images/bg.png";
import FG from "./images/fg.png";
import M1 from "./images/m1.png";
import M2 from "./images/m2.png";
import Logo from "./JA_Logo.svg";
import styles from "./ParallaxBanner.scss";
import Plx from "react-plx";
import Resume from "./components/resume.js";
import Separator from "./components/separator.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollPane = React.createRef();
    this.state = { width: 0, height: 0, margin: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  slideyTitle() {
    let direction;
    if (this.state.width > this.state.height) {
      direction = "w";
    } else {
      direction = "h";
    }
    if (this.state.width > 600) {
      return (
        <div>
          {" "}
          <Plx
            style={{
              width: "fit-content",
              display: "inline-block",
              verticalAlign: "middle"
            }}
            parallaxData={[
              {
                start: "self",
                duration: "40%",
                easing: "ease",
                startOffset: "10%",
                properties: [
                  {
                    startValue: 0,
                    endValue: -this.state.width + this.state.width * 0.95,
                    property: "translateX"
                  }
                ]
              }
            ]}
          >
            <img
              src={Logo}
              alt={Logo}
              style={{
                height: "20v" + direction
              }}
            />
          </Plx>
          <Plx
            style={{
              width: "fit-content",
              display: "inline-block",
              verticalAlign: "middle"
            }}
            parallaxData={[
              {
                start: "self",
                duration: "40%",
                easing: "ease",
                startOffset: "10%",
                properties: [
                  {
                    startValue: 0,
                    endValue: this.state.width - this.state.width * 0.95,
                    property: "translateX"
                  }
                ]
              }
            ]}
          >
            <h1
              style={{
                fontSize: "9v" + direction,
                fontWeight: "lighter",
                color: " #22a39f"
              }}
            >
              Experience
            </h1>
          </Plx>
          );
        </div>
      );
    } else {
      return (
        <div>
          <Plx
            className="slideyTitle"
            style={{
              width: "fit-content",
              display: "inline-block",
              verticalAlign: "middle"
            }}
            parallaxData={[
              {
                start: "self",
                duration: "40%",
                easing: "ease",
                startOffset: "10%",
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                  }
                ]
              }
            ]}
          >
            <img
              src={Logo}
              alt={Logo}
              style={{
                height: "20v" + direction
              }}
            />
            <h1
              style={{
                fontSize: "9v" + direction,
                fontWeight: "lighter",
                color: " #22a39f"
              }}
            >
              Experience
            </h1>
          </Plx>
        </div>
      );
    }
  }
  render() {
    const layers = [
      {
        image: BG,
        amount: 0.6
      },
      {
        image: M2,
        amount: 0.4
      },
      {
        image: M1,
        amount: 0.3
      },
      {
        image: FG,
        amount: 0.2
      }
    ];
    let direction;
    if (this.state.width > this.state.height) {
      direction = "w";
    } else {
      direction = "h";
    }
    return (
      <ParallaxProvider>
        <div className="App  ms-Fabric">
          <Fade>
            <div className={styles.bannerContainer}>
              <ParallaxBanner
                className={styles.bannerBg}
                layers={layers}
                style={{ height: "100vh" }}
              >
                <span className="parallaxChildren ms-font-su">
                  <img
                    src={Logo}
                    alt={Logo}
                    style={{ height: "25v" + direction }}
                  />
                  <h1
                    style={{
                      fontSize: "7v" + direction,
                      color: "black"
                    }}
                  >
                    Joseph Antony
                  </h1>
                </span>
              </ParallaxBanner>
            </div>
          </Fade>
          <div className="resume">
            <div style={{ verticalAlign: "middle" }}>{this.slideyTitle()}</div>

            <Separator />

            <Fade>
              <Resume />
            </Fade>
            <Separator />
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
