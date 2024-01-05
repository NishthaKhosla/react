
import ListItem from "./Listitem"
import p2 from "../assets/icons/p2.jpeg"
import p1 from "../assets/icons/p1.jpeg"
import p3 from "../assets/icons/p3.jpeg"
import p4 from "../assets/icons/p4.jpeg"
import p5 from "../assets/icons/p5.jpeg"
import p6 from "../assets/icons/p6.jpeg"
import { useState } from "react"


const Products = () => {
   
        const [items,setitems] = useState([

    {
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: p1,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         size1 : "M",
         size2 : "L",
         size3 : "XL",
         size4 : "XXL"
     
    },
    {
        id: 1,
        title: "Title of this Item 2",
        price: 100,
        discountedPrice: 80,
        thumbnail: p2,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    

    },
    {
        id:2,
        title: "Title of this Item 3",
        price: 400,
        discountedPrice: 280,
        thumbnail: p6,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    
    },
    {
        id: 3,
        title: "Title of this Item 4",
        price: 800,
        discountedPrice: 780,
        thumbnail: p5,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    
    },
    {
        id: 4,
        title: "Title of this Item 4",
        price: 900,
        discountedPrice: 700,
        thumbnail: p4,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    
    },
    {
        id: 5,
        title: "Title of this Item 5",
        price: 400,
        discountedPrice: 350,
        thumbnail: p3,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    
    },

    {
        id: 5,
        title: "Title of this Item 5",
        price: 400,
        discountedPrice: 350,
        thumbnail: p3,
        Description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        size1 : "M",
        size2 : "L",
        size3 : "XL",
        size4 : "XXL"
    
    }])


return (
        <div className={"lists"}>
            
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem>
                <ListItem data={items[3]}></ListItem>
                <ListItem data={items[4]}></ListItem>
                <ListItem data={items[5]}></ListItem> */}
                {
                    items.map(item =>{
                        return(<ListItem key = {item.id} data ={item}/>)
                    })
                }
            
        </div>
    )
}

export default Products