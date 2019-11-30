import React from "react";


const Chefdetails = () => {
  return (
    <div class="col-lg-4 col-md-6 mb-4">

    <h4 class="py-lg-4 pb-4 text-center">Narrower</h4>

  
    <div class="card card-cascade narrower mb-4" style={{"margin-top": "28px"}}>

      <div class="view view-cascade">
        <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="card-img-top"
          alt="" />
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      
      <div class="card-body card-body-cascade">
        <h5 class="pink-text"><i class="fas fa-utensils"></i> Culinary</h5>
       
        <h4 class="card-title">Cheat day inspirations</h4>
      
        <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut
          aliquid ex ea commodi.</p>
        <a class="btn btn-unique">Button</a>
      </div>
   </div>
   </div>
 
  );
}

export default Chefdetails;