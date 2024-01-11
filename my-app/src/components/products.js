import ListItem from "./Listitem";
import p2 from "../assets/icons/p2.jpeg";
import p1 from "../assets/icons/p1.jpeg";
import p3 from "../assets/icons/p3.jpeg";
import p4 from "../assets/icons/p4.jpeg";
import p5 from "../assets/icons/p5.jpeg";
import p6 from "../assets/icons/p6.jpeg";
import placeholder from "../assets/icons/placeholder.png";
import { useState, useEffect } from "react";

const Products = () => {
  const [items, setitems] = useState([
    // {
    //     id: 0,
    //     title: "Title of this Item 1",
    //     price: 450,
    //     discountedPrice: 340,
    //     thumbnail: p1,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //      size1 : "M",
    //      size2 : "L",
    //      size3 : "XL",
    //      size4 : "XXL"
    // },
    // {
    //     id: 1,
    //     title: "Title of this Item 2",
    //     price: 100,
    //     discountedPrice: 80,
    //     thumbnail: p2,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // },
    // {
    //     id:2,
    //     title: "Title of this Item 3",
    //     price: 400,
    //     discountedPrice: 280,
    //     thumbnail: p6,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // },
    // {
    //     id: 3,
    //     title: "Title of this Item 4",
    //     price: 800,
    //     discountedPrice: 780,
    //     thumbnail: p5,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // },
    // {
    //     id: 4,
    //     title: "Title of this Item 4",
    //     price: 900,
    //     discountedPrice: 700,
    //     thumbnail: p4,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // },
    // {
    //     id: 5,
    //     title: "Title of this Item 5",
    //     price: 400,
    //     discountedPrice: 350,
    //     thumbnail: p3,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // },
    // {
    //     id: 5,
    //     title: "Title of this Item 5",
    //     price: 400,
    //     discountedPrice: 350,
    //     thumbnail: p3,
    //     Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     size1 : "M",
    //     size2 : "L",
    //     size3 : "XL",
    //     size4 : "XXL"
    // }
  ]);

  useEffect(() => {
    //you can use async and await as well in place of .this
    //async function fetchItems() {
    // fetch("https://react-9e31f-default-rtdb.firebaseio.com/items.json")

    //   const data = response.data
    //   const transformedData = data.map((

    //           items,index) => {
    //             return{
    //               ...items,
    //               id:index
    //             }
    //           }
    //         )
    //         setitems(transformedData);

    //         }

    // fetchItems();

    fetch("https://react-9e31f-default-rtdb.firebaseio.com/items.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((items, index) => {
          return {
            ...items,
            id: index,
          };
        });
        setitems(transformedData);
      });
  }, []);

  return (
    <div className={"lists"}>
      {items.map((item) => {
        console.log(item);
        return <ListItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Products;
