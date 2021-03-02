import React from 'react'
import '../Styles/Arrowbox.css';
export default function Arrowbox({content,extraclass}) {
    return (
        <div>
            <div className={extraclass?`outer__box + ${extraclass}`:"outer__box"}>
                  <div>{content}</div>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
        </div>
    )
}
