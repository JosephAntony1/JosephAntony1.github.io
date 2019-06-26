import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";
import { StickyContainer, Sticky } from "react-sticky";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import BG from "./images/IMG_3336.jpg";
import FG from "./images/arlington.png";
import Logo from "./JA_Logo.svg";
import styles from "./ParallaxBanner.scss";
import Plx from "react-plx";

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
  render() {
    const layers = [
      {
        image: BG,
        amount: 0.6
      },
      {
        image: FG,
        amount: 0.2
      }
    ];
    return (
      <ParallaxProvider>
        <Fade>
          <div className="App">
            <link rel="stylesheet" href="fabric.css" />

            <div className="vertical">
              <div className={styles.bannerContainer}>
                <ParallaxBanner
                  className={styles.bannerBg}
                  layers={layers}
                  style={{ height: "100vh" }}
                >
                  <span className="parallaxChildren" style={{ color: "white" }}>
                    <img src={Logo} alt={Logo} style={{ width: this.state.width / 3 }} />

                    <h1
                      style={{
                        color: "black",
                        WebkitTextStroke: "1px #605e5c",
                        fontSize: this.state.width / 13
                      }}
                    >
                      Joseph Antony
                    </h1>
                    <h5
                      style={{
                        color: "white",
                        WebkitTextStroke: ".4px #605e5c",
                        fontSize: this.state.width / 22
                      }}
                    >
                      An interactive resume
                    </h5>
                  </span>
                </ParallaxBanner>
              </div>
            </div>
            <Plx
              parallaxData={[
                {
                  start: "10%",
                  end: "50%",
                  properties: [
                    {
                      startValue: 0,
                      endValue: -this.state.width + this.state.width * 0.7,
                      property: "translateX"
                    }
                  ]
                }
              ]}
            >
              <img src={Logo} alt={Logo} style={{ height: "20vh" }} />
            </Plx>
            <img src={Logo} alt={Logo} style={{ height: "100vh" }} />
          </div>
        </Fade>
      </ParallaxProvider>
    );
  }
}

export default App;
