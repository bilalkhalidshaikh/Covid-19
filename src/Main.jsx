import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import BottomNav from "./components/BottomNav";
import { Image } from "bumbag";
import image from "./images/image.png";
import { use3dEffect } from "use-3d-effect";
import { animated } from "react-spring";

function Covid19() {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  return (
    <>
      <br />
      <animated.div
        ref={ref}
        style={{ ...style ,borderRadius:"20%"}}
        {...mouseHandlers}
      >
        <Image
          className={styles.image}
          src={image}
          alt="COVID-19"
          isFixed
          resize
        />
      </animated.div>
    </>
  );
}

class Main extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Covid19 />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <BottomNav />
      </div>
    );
  }
}

export default Main;
