import React from 'react'
import "../Styles/Item.css"
export default function Item({name,ingredients,image}) {
    console.log(name)
    return (
        <div className="item">
            <div>
            <img className="image__item"src={image}/>
            </div>
            <div className="item__info">
            <h4>{name}</h4>
            <div>{ingredients}</div>
            </div>
            
        </div>
    )
}
