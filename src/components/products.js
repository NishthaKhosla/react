
import ListItem from "./Listitem"
import p2 from "../assets/icons/p2.jpeg"
import p1 from "../assets/icons/p1.jpeg"
import p3 from "../assets/icons/p3.jpeg"
import p4 from "../assets/icons/p4.jpeg"
import p5 from "../assets/icons/p5.jpeg"
import p6 from "../assets/icons/p6.jpeg"

const items = [
    {
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: p1
    },
    {
        id: 1,
        title: "Title of this Item 2",
        price: 100,
        discountedPrice: 80,
        thumbnail: p2
    },
    {
        id:2,
        title: "Title of this Item 3",
        price: 400,
        discountedPrice: 280,
        thumbnail: p6
    },
    {
        id: 3,
        title: "Title of this Item 4",
        price: 800,
        discountedPrice: 780,
        thumbnail: p5
    },
    {
        id: 4,
        title: "Title of this Item 4",
        price: 900,
        discountedPrice: 700,
        thumbnail: p4
    },
    {
        id: 5,
        title: "Title of this Item 5",
        price: 400,
        discountedPrice: 350,
        thumbnail: p3
    }


]

const Products = () => {
    return (
        <div className={"lists"}>
            
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem>
                <ListItem data={items[3]}></ListItem>
                <ListItem data={items[4]}></ListItem>
                <ListItem data={items[5]}></ListItem>
            
        </div>
    )
}

export default Products