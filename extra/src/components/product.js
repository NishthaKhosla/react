import ListItem from "./list";
import { useState } from "react";

import p2 from "../assets/icons/p2.jpeg";
import p1 from "../assets/icons/p1.jpeg";
import p3 from "../assets/icons/p3.jpeg";
import p4 from "../assets/icons/p4.jpeg";
import p5 from "../assets/icons/p5.jpeg";
import p6 from "../assets/icons/p6.jpeg";

const Products = () => {
  const [items, setItems] = useState({
    id: 0,
    title: "Title of this Item 1",
    price: 450,
    discountedPrice: 340,
    thumbnail: p1,
    Description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    size1: "M",
    size2: "L",
    size3: "XL",
    size4: "XXL",
  });

  const [title, setTitle] = useState("");
  const [price, setprice] = useState("0");
  const [discountedPrice, setdiscountedPrice] = useState("0");
  const [itemDetails, setitemDetails] = useState("");
  const [thumbnail, setthumbnail] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlePrice = (event) => {
    setprice(event.target.value);
  };

  const handlediscountedPrice = (event) => {
    setdiscountedPrice(event.target.value);
  };

  const handleitemDetails = (event) => {
    setitemDetails(event.target.value);
  };

  const handlethumbnail = (event) => {
    setthumbnail(event.target.value);
    
  };

  const updateForm = (event) => {
    event.preventDefault();
    console.log({
      title: title,
      price,
      discountedPrice,
      thumbnail,
      Description: itemDetails,
      size1: "M",
      size2: "L",
      size3: "XL",
      size4: "XXL",
    });

    if (discountedPrice > price) {
      alert("Discounted Price cannot be greater than price");
      return;
    }
    setItems({
      title,
      price,
      discountedPrice,
      thumbnail,
      Description: itemDetails,
      size1: "M",
      size2: "L",
      size3: "XL",
      size4: "XXL",
    });
  };

  return (
    <div className={"lists"}>
      <div className={"form"}>
        <form onSubmit={updateForm}>
          <h2>Item card details</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitle}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={handlePrice}
            ></input>
          </div>
          <div>
            <label htmlFor="discounted-price">Discounted Price</label>
            <input
              type="text"
              placeholder="Enter discounted Price"
              value={discountedPrice}
              onChange={handlediscountedPrice}
            ></input>
          </div>
          <div>
            <label htmlFor="item-details">Item Details</label>
            <input
              type="text"
              placeholder="Enter item details"
              value={itemDetails}
              onChange={handleitemDetails}
            ></input>
          </div>
          <div>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              placeholder="Enter thumnail name"
              value={thumbnail}
              onChange={handlethumbnail}
            ></input>
          </div>
          <div>
            <button className={"modern-button"}>Update</button>
          </div>
        </form>
      </div>

      <ListItem data={items}></ListItem>
    </div>
  );
};

export default Products;
