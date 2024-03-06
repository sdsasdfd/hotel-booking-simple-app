import React from "react";
import "./FeatureProperties.css";
const items = [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: "$120",
    rating: 8.9,
  },
  {
    img: "//cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
    name: "Comfort Suites Airport",
    city: "Austin",
    price: "$140",
    rating: 7.9,
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: "$99",
    rating: 3.9,
  },
  {
    img: "//cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
    name: "Hilton Garden Inn Hotel",
    city: "Berlin",
    price: "$105",
    rating: 7.9,
  },
];

const FeatureProperties = () => {
  return (
    <div className="fp">
      {items.map((item, index) => (
        <div key={index} className="fpItem">
          <img src={item.img} alt="" className="fpImg" />
          <span className="fpName"> {item.name} </span>
          <span className="fpcity"> {item.city} </span>
          <span className="fpPrice"> {item.price} </span>
          <div className="fpRating">
            <button> {item.rating} </button>
            <span>Excellent</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProperties;
