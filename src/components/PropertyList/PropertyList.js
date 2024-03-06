import React from "react";
import "./PropertyList.css";
const items = [
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    title: "Hotels",
    address: "233 hotels",
  },
  {
    img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    title: "Apartments",
    address: "233 hotels",
  },
  {
    img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    title: "Resorts",
    address: "233 hotels",
  },
  {
    img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    title: "Cabins",
    address: "233 hotels",
  },
];

const PropertyList = () => {
  return (
    <div className="pList">
      {items.map((item, index) => (
        <div className="pListItem" key={item.index}>
          <img src={item.img} alt="" className="pListImg" />
          <div className="pListTitle">
            <h1> {item.title} </h1>
            <h2> {item.address} </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
