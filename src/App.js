import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Logo from "./JA_Logo.svg";
import styles from "./ParallaxBanner.scss";
import Plx from "react-plx";
import Resume from "./components/resume.js";
import Separator from "./components/separator.js";
import Layer1 from "./images/1-min.png";
import Layer2 from "./images/2-min.png";
import Layer3 from "./images/3-min.png";
import Layer4 from "./images/4-min.png";
import Layer5 from "./images/5-min.png";
import Layer6 from "./images/6.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollPane = React.createRef();
    this.state = { width: 0, height: 0, margin: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  render() {
    const layers = [
      {
        image: Layer6,
        amount: .85,
      },
      {
        image: Layer5,
        amount: .6
      },
      {
        image: Layer4,
        amount: .5
      },
      {
        image: Layer3,
        amount: .4
      },
      {
        image: Layer2,
        amount: .3
      },
      {
        image: Layer1,
        amount: .2
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
                <div className="parallaxChildren ms-font-su">
                  <img
                    src={Logo}
                    alt={Logo}
                    style={{ height: "25v" + direction }}
                  />
                  <h1
                    style={{
                      fontSize: "7v" + direction,
                      color: "white",
                      margin:"0"
                    }}
                  >
                    Joseph Antony
                  </h1>
                </div>
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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this._ismounted = false;
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
    if (this.state.width > 768) {
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
}

export default App;
