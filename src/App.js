
import './index.css'
import Products from "./components/products";
import Header from "./components/header";
import Subheader from "./components/Subheader";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;