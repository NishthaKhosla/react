import ReactDom from "react-dom";
import "./loader.css";
//using portals help us render the elemnts in more efficient way while the working remains same

export const Backdrop = () => {
  <div className="loader-overlay"></div>;
};

const Loader = () => {
  return ReactDom.createPortal(
    <>
      <Backdrop />
      <div className="loading-dots"></div>
      <div>Loading...</div>
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
    </>,
    document.getElementById("loader-root")
  );
};

export default Loader;
