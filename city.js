import React, { Component } from "react";
import "../../StyleSheet/city.css";
import ved from "../../data/city.json";
import Kolkata from "../../Images/Kolkata.jpg";
import Bangalore from "../../Images/Bangalore.jpg";
import Bhopal from "../../Images/Bhopal.jpg";
import Mumbai from "../../Images/Mumbai.jpg";
import Delhi from "../../Images/Delhi.jpg";
import Ranchi from "../../Images/Ranchi.jpg";
import Vizag from "../../Images/Vizag.jpg";
import Pune from "../../Images/Pune.png";
import Bhubaneshwar from "../../Images/Bhubhaneshwar.jpg";
import Hyderabad from "../../Images/Hyderabad.jpg";
import Menu from "../Menu/Menu";

class City extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.show2 = this.show2.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  show(value) {
    this.props.show(value);
  }

  show2(value) {
    this.props.show2(value);
  }

  changeCity(value) {
    this.props.changeCity(value);
  }

  render() {
    var i = 10;
    var city = this.props.cityName;
    var image_name;
    if (city === "New Delhi") {
      i = 0;
      image_name = Delhi;
    }
    if (city === "Kolkata") {
      i = 1;
      image_name = Kolkata;
    }
    if (city === "Bhubaneshwar") {
      i = 2;
      image_name = Bhubaneshwar;
    }
    if (city === "Ranchi") {
      i = 3;
      image_name = Ranchi;
    }
    if (city === "Bangalore") {
      i = 4;
      image_name = Bangalore;
    }
    if (city === "Bhopal") {
      i = 5;
      image_name = Bhopal;
    }
    if (city === "Vizag") {
      i = 6;
      image_name = Vizag;
    }
    if (city === "Hyderabad") {
      i = 7;
      image_name = Hyderabad;
    }
    if (city === "Mumbai") {
      i = 8;
      image_name = Mumbai;
    }
    if (city === "Pune") {
      i = 9;
      image_name = Pune;
    }
    return (
      <div className="CityPage">
        <div
          className="CityPage op"
          style={{ backgroundImage: "url(" + image_name + ")" }}
        />
        <Menu show={this.changeCity} show2={this.show2} />
        <div className="city-extra" />
        <div className="city-e">
          <div className="city-events">
            {ved[ved["city"][i]].event.map(ta => (
              <div className="e3">
                <a className="ved" onClick={() => this.show(ta)}>
                  {" "}
                  {ta}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="main">
          <div className="main-in">
            <div className="city-city">{ved["city"][i]}</div>
            <br />
            <div className="city-desc">{ved[ved["city"][i]].desc}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
