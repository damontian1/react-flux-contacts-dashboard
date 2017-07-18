import React from "react";
import ContactForm from "./ContactForm";
import ApiWidget from "./ApiWidget";

const Sidebar = function(props){
  // console.log(props.item)
  return(
    <div className="col-md-4">
      <ContactForm {...props}/>
      <ApiWidget />
    </div>
  )
}

export default Sidebar;


