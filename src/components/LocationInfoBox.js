import { Icon } from '@iconify/react'  

import ls from 'local-storage';


 
const LocationInfoBox = ({info , onClick}) => { 
  if(ls.get("isOpen") === "true") {
  return ( 
    
    <div className="location-info" >  
   
    
    <Icon  icon="entypo:circle-with-cross" className="cross-icon" onClick={()=> {
        ls.set("isOpen", "false") 
        window.location.reload(false)  
        
      }}/>
  
  
 <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
}; 
}

export default LocationInfoBox;
