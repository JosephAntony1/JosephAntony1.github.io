import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";
import { StickyContainer, Sticky } from "react-sticky";
import { ParallaxProvider, ParallaxBanner} from "react-scroll-parallax";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollPane = React.createRef();
  }

  render() {
    return (
      <Fade>
        <ParallaxProvider>
          <div className="App">
            {({ style }) => <div style={style} />}
            <a href="#home"> Go to home </a>
            <a href="#section2"> Go to section 2 </a>
            <ParallaxBanner
              className="Banner"
              layers={[
                {
                  image: "./JA Logo.svg",
                  amount: 0.1
                },
                {
                  image: "./JA Logo.svg",
                  amount: 0.2
                }
              ]}
              style={{
                height: "500px"
              }}
            >
              <h1>Banner Children</h1>
            </ParallaxBanner>
          </div>
        </ParallaxProvider>
      </Fade>
    );
  }
}

export default App;
