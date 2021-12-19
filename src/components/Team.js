import React from 'react' 
import './Team.css' 
import sur from './surr.jpg' 
import shubahm from './shubham.jpg'

function team() { 
    
    return(  
        <div class="row"> 

        <h1> THE TEAM</h1> 

        <div class="col-sm">
        <div className='card-container' >  
        <div className='image-container'> 
      <img src={sur} /> 
  </div> 
  <div className='card-content'> 
  <div className='card-body'> 
  <p> Sur Shri </p>
  
   </div>
  </div> 
  </div> 
  <div class="col-sm">

  <div className='card-container' > 
  <div className='image-container'> 
      <img src={shubahm} /> 
  </div> 
  <div className='card-content'> 
  <div className='card-body'> 
  <p> Shubham Sharma  </p>
  
   </div>
  </div> 
  </div>

    </div> 
    </div> 
    </div>
 

 





    )
} 

export default team





