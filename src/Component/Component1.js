import React from 'react'
import '../Styles/Component1.css';
import Arrowbox from './Arrowbox';
export default function Component1() {
    return (
        <div className="component__one">
            <div className="col-1">
              <div className="header">
                  <div>Shop</div>
                  <div>Read</div>
                  <div>Stores</div>
                  <div>Search</div>
              </div>
            </div>
            <div className="col-2">
                <div className="main__content">
                <h1>Treasure the ties that unite</h1>
                <div> Wishing strength, prosperity and good fortune to you and yours this Lunar New Year—be they near or far.</div>
                <Arrowbox content={"Explore auspicious gifts"} extraclass="white"/>
                </div>
               </div>
            <div className="col-3">
                  <div className="header">
                      <div>Login</div>
                      <div>Cart</div>
                  </div>
            </div>
        </div>
    )
}
