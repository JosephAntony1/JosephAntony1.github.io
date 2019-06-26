import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";
import { StickyContainer, Sticky } from "react-sticky";
import { ParallaxProvider, ParallaxBanner, Parallax} from "react-scroll-parallax";
import BG from "./images/IMG_3336.jpg";
import FG from "./images/arlington.png";
import Logo from "./JA_Logo.svg";
import styles from "./ParallaxBanner.scss";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollPane = React.createRef();
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
            <div className="vertical">
              <div className={styles.bannerContainer}>
                <ParallaxBanner
                  className={styles.bannerBg}
                  layers={layers}
                  style={{ height: "100vh" }}
                >
                  <span
                    className="ms-fontSize-68  parallaxChildren"
                    style={{ color: "white" }}
                  >
                    <img
                      src={Logo}
                      alt={Logo}
                      style={{ height: "50vh", fill: "green" }}
                    />

                    <h1 style={{ color: "black" }}>Joseph Antony</h1>
                    <h5>An interactive resume</h5>
                  </span>
                </ParallaxBanner>
                <Parallax>
                  <img src={Logo} alt={Logo} style={{ height: "20vh" }} />
                </Parallax>

              </div>
            </div>
          </div>
        </Fade>
      </ParallaxProvider>
    );
  }
}

export default App;
