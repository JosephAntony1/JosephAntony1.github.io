import React from "react";
import Plx from "react-plx";
class Separator extends React.Component {
  render() {
    return (
      <Plx
        className="separate"
        parallaxData={[
          {
            start: "self",
            duration: "10%",
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "scaleX"
              }
            ]
          }
        ]}
      >
        <hr className="separate" />
      </Plx>
    );
  }
}

export default Separator;
