
// import ListItem from "./components/Listitem";
 import './index.css'
// const App = () => {
//   return (
//     <div>
    
//     <ListItem data ={{
//       Title : "title of item 1",
//       Price: 450,
//       DiscountedPrice:300,
//       Thumbnail:"p1.jpeg"
//     }}></ListItem>

//     <ListItem data = {{
//       Title : "title of item 2",
//       Price: 500,
//       DiscountedPrice:400,
//       Thumbnail:"p2.jpeg"
//     }}
//     ></ListItem>
    

//     </div>
//   );
// }

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