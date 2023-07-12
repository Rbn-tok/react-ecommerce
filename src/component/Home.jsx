import React from 'react'
import mainBannerImage from '../asset/main_banner1-picsay-2.jpg';
import Produits from './Produits';  
const Home = ({title}) => {

  document.title=title;
  return (
    <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img src={mainBannerImage} className="card-img " alt="background" />
            <div className="card-img-overlay">
                <div className="container my-1">
                  <h5 className="card-title display-5 fw-bolder mb-0 ">Nouveau Arrivage</h5>
                  <p className="card-text">VERIFIER LES TENDANCES</p>
                
                </div>
            
            </div>
        </div>
        <Produits/>
    </div>
    
  )
}

export default Home