import React from 'react'
import '../Styles/Component2.css';
import Item from './Item';
export default function Component2() {
    return (
        <div className="component__two">
             <Item name={"Tacit Eau de Parfum"} ingredients={"Crisp , green , citrus fragrance"} image={"/images/xyz.png"}/>
             <Item name={"Tacit Eau de Parfum"} ingredients={"Crisp , green , citrus fragrance"} image={"/images/xyz.png"}/>
             <Item name={"Tacit Eau de Parfum"} ingredients={"Crisp , green , citrus fragrance"} image={"/images/xyz.png"}/>
        </div>
    )
}
