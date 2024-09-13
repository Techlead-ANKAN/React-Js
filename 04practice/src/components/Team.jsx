import React from "react"
import "./Team.css"

function Team(props) {

    console.log(props)

    return (

        <div className="container">

            <div className="one cards">
                <div className="one-card-pic pic"></div>
                <div className="one-details det">
                    <button>Visit{props.t1}</button>
                </div>
            </div>

            <div className="two cards">
                <div className="two-card-pic pic"></div>
                <div className="two-details det">
                    <button>Visit{props.t2}</button>
                </div>
            </div>
            
            <div className="three cards">
                <div className="three-card-pic pic"></div>
                <div className="four-details det">
                    <button>Visit{props.t3}</button>
                </div>
            </div>
            
            <div className="four cards">
                <div className="four-card-pic pic"></div>
                <div className="four-details det">
                    <button>Visit{props.t4}</button>
                </div>
            </div>

        </div>

    );


}

export default Team;