import React from 'react'

function Starships() {
  return (
    <div className="container d-flex">
            <div className="card bg-light m-2">
            <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/>
                <p>title of the character</p> 
                <p>gender: value</p>
                <p>hair color: value</p>
                <p>eye color: value</p> 
                <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button className="btn" id="favorite"><span className="fa fa-heart text-success"></span></button>
                </div>
            </div>
        </div>
  )
}

export default Starships