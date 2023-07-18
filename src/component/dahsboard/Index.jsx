import React from 'react'
import SideBar from './SideBar';


const Index = (props) => {
 
  var titre=props.title;

  
    document.title=titre;

  
  return (
    <>
      
     <SideBar/>
    </>
    
  )
}

export default Index
