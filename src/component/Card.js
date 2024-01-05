import React from "react";

const Card = ({ name , email, id }) =>{
    return(
        <div className="bg-light-blue dib b3 pa3 ma3 grow bw5 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;