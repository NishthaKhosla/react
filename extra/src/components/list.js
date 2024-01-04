import AddToCart from "../assets/icons/cart.png";
import { useState } from "react";

const ListItem = ({ data }) => {
  const [message, setMessage] = useState("Add to cart");
  var [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prev) => {
      return prev <= 1 ? 0 : prev - 1;
    });
    if (count - 1 <= 0) {
      setMessage("Add to cart");
    }
  };

  const increaseCount = () => {
    setMessage("Added to cart!");

    setCount((prev) => prev + 1);
  };

  return (
    <div className={"item-card"}>
      <img className={"img-fluid"} src={data.thumbnail} alt="no-img"></img>
      <div className={"item-card-information"}>
        <div className={"pricing"}>
          <span>${data.discountedPrice}</span>
          <small>
            <strike>${data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.Title}</h3>
        </div>
        <div className={"Description"}>
          <span>{data.Description}</span>
        </div>
        <button className="sizes">{data.size1}</button>
        <button className="sizes">{data.size2}</button>
        <button className="sizes">{data.size3}</button>
        <button className="sizes">{data.size4}</button>
      </div>
      <div className={"cart-add"}>
        <h3 className={"cart-text"}>{message}</h3>
        <img className={"cart-img"} src={AddToCart} alt="cart"></img>

        <div className={"counter"}>
          <span className={"count-text"}>
            <button className={"count-btn,btn1"} onClick={decreaseCount}>
              -
            </button>
            <span className={"count-value"}>{count}</span>
            <button className={"count-btn,btn2"} onClick={increaseCount}>
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;