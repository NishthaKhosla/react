//fragments are used to return multiple elements makes the syntax shorter if we dont dont want to make multiple nodes
import {Fragment } from "react";
import ReactDom from "react-dom";
import Backdrop from "./loader"
import "./modal.css"
const Modal =({onClose,children})=>{
    return(
        <Fragment>
{
    ReactDom.createPortal(
        <Fragment>
            <Backdrop/>
            <div className="modal">{children}
            <button  type= "close" onClick = {onClose}>X</button></div>
            <div className="content"> {children}</div>
            
        </Fragment>,
        document.getElementById("modal-root")
    )
}
        </Fragment>
    )
}

export default Modal;