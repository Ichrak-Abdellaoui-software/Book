import React from "react";
import '../styles/cards.css'
const Cards = ({ item, handleClick }) => {
    const { title, author, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="img" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>price-{price}TND</p>
                <button onClick={() => handleClick(item)}>add to cart</button>
            </div>
        </div>
    )
}
export default Cards