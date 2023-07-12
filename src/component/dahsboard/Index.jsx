import React from 'react'


const Index = (props) => {
 
  var titre=props.title;

  
    document.title=titre;

  
  return (
    <>
      <div>je suis {titre} index </div>
      <button className='btn btn-outline-dark me-8'>ok</button>
    </>
    
  )
}

export default Index
