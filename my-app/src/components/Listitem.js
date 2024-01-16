import AddToCart from "../assets/icons/cart.png";
//import thumbnail from "../assets/icons/placeholder.png";
import { Fragment, useState } from "react";
import Modal from "./UI/modal";

const ListItem = ({ data }) => {
  const [message, setMessage] = useState("Add to cart");
  var [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
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

  const handleModal =( ) =>{
    setModal(prev => !prev);
  }
  return (
    <Fragment>
      <div onClick = {handleModal} className={"item-card"}>
        <img
          className={"img-fluid"}
          src={`./assets/${data.thumbnail}`}
          alt="no-img"
        />
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
            <span>{data.title}</span>
          </div>
          {/* <button className="sizes">{data.size1}</button>
        <button className="sizes">{data.size2}</button>
        <button className="sizes">{data.size3}</button>
        <button className="sizes">{data.size4}</button> */}
        </div>

        {count < 1 ? (
          <button className={"cart-add"} onClick={increaseCount}>
            <h3 className={"cart-text"}>{message}</h3>
            <img className={"cart-img"} src={AddToCart} alt="cart" />
          </button>
        ) : (
          <div className={"counter"}>
            <span className={"count-text"}>
              <button className={"count-btn btn1"} onClick={decreaseCount}>
                -
              </button>
              <span className={"count-value"}>{count}</span>
              <button className={"count-btn btn2"} onClick={increaseCount}>
                +
              </button>
            </span>
          </div>
        )}
      </div>

      {modal && 
      <Modal onClose={handleModal}> 
      <div className="item-card__modal">
        <div className="img-wrap">
        <img
          className={"img-fluid"}
          src={`./assets/${data.thumbnail}`}
          alt="no-img"
        />
        <div className="meta">
          <h3>{data.title }</h3>
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
            <span>{data.description}</span>
          </div>
        </div>
        {count < 1 ? (
          <button className={"cart-add"} onClick={increaseCount}>
            <h3 className={"cart-text"}>{message}</h3>
            <img className={"cart-img"} src={AddToCart} alt="cart" />
          </button>
        ) : (
          <div className={"counter"}>
            <span className={"count-text"}>
              <button className={"count-btn btn1"} onClick={decreaseCount}>
                -
              </button>
              <span className={"count-value"}>{count}</span>
              <button className={"count-btn btn2"} onClick={increaseCount}>
                +
              </button>
            </span>
          </div>
        )}

          </div></div> </Modal>}
    </Fragment>
  );
};

export default ListItem;
