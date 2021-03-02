import React from 'react'
import Arrowbox from '../Component/Arrowbox';
import '../Styles/Component45.css';
export default function Component45({image,header,body,insidebox}) {
    return (
        <div className="component__fourfive">
            <div className="col-1">
                <h2>{header}</h2>
                <div>{body}</div>
                <Arrowbox content={insidebox}/>
            </div>
            <div className="col-2"></div>
        </div>
    )
}
