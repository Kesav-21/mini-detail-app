import React from "react";
//Variables
let eleid;
//Functions
const handleClick=(e)=>{
  eleid=document.getElementsByClassName("des")[e.target.id-1];
  if (eleid.style.display !== "none") {
    eleid.style.display = "none";
  } else {
    eleid.style.display = "block";
  }
}
//Component
const Card = (props)=>{
  return (
          <div className="container">
              <div key={props.id} className="card">
              <div>
                <h4>NAME</h4>
                <p>{props.name}</p>
              </div>
              <div>
                <h4>CONTACT</h4>
                <p>{props.phone}</p>
              </div>
              <div>
                <h4>EMAIL</h4>
                <p>{props.mail}</p>
              </div>
              <div>
                <h4>CITY</h4>
                <p>{props.city}</p>
              </div>
              <div>
                <button id={props.id} className="btn" onClick={handleClick}>View Details</button>
              </div>
              </div>
              <section id={props.id} className="des">
                <hr/>
              <div>
                  <h4>Description</h4>
                  <p>{props.desc}</p>
              </div>
              <div className="split">
                <div>              
                <div>
                  <h4>Company</h4>
                  <p>{props.company}</p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{props.phone}</p>
                </div>
                <div>
                  <h4>Website</h4>
                  <p>{props.web}</p>
                </div>
                </div>
                <div>
                <div>
                      <h3>Street</h3>
                      <p>{props.street}</p>
                    </div>
                    <div>
                      <h4>City</h4>
                      <p>{props.city}</p>
                    </div>
                    <div>
                      <h4>Zipcode</h4>
                      <p>{props.zip}</p>
                    </div>
                    </div>
                    </div>
                    </section>
            </div>
            
        );
      }
export default Card;