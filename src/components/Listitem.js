import AddToCart from "../assets/icons/cart.png"

const ListItem =({data}) =>{
    return (
        <div className = {"item-card"}>
            <img  className ={"img-fluid"} src = {data.thumbnail} alt="no-img"></img>
            <div className = {"item-card_information"} >
                <div className = {"pricing"}>
                    <span>${data.discountedPrice}</span>
                    <small>
                        <strike>${data.price}</strike>
                    </small>
                </div>
                <div className = {"title"}>
                    <h3>{data.Title}</h3>
                </div>
            </div>
            <button className ={"cart-add"}>
                <span>Add to cart</span>
                <img src ={AddToCart} alt="cart"></img>
            </button>
        </div>
    )
}

export default ListItem